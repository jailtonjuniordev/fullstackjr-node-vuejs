<script setup>
import {ref, onMounted, computed} from "vue";
import axios from "axios";

const products = ref([]);
const overlayEdit = ref(false);
const overlayCreate = ref(false);

const selectedProduct = ref({
  id: null,
  name: '',
  price: '',
  stock: '',
});

const productToBeSaved = ref({
  name: '',
  price: '',
  stock: '',
})

const formattedPrice = (price) => {
  const numericPrice = Number(price);
  if (isNaN(numericPrice)) {
    return '';
  }
  return numericPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
};

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/products/view");
    products.value = response.data;
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
  }
};

const editProduct = async (id) => {
  await axios.get(`http://localhost:8080/api/v1/products/view/${id}`).then((r) => {
    selectedProduct.value = {
      id: id,
      name: r.data.name,
      price: r.data.price,
      stock: r.data.stock,
    };
    overlayEdit.value = true;
    console.log(selectedProduct.value)
  }).catch((e) => {
    console.log(e);
  })
};

const saveEditedProduct = async () => {
  try {
    await axios.put(`http://localhost:8080/api/v1/products/edit/${selectedProduct.value.id}`, {
      stock: selectedProduct.value.stock,
      name: selectedProduct.value.name,
      price: selectedProduct.value.price,
    });
    alert("Produto atualizado com sucesso!");
    overlayEdit.value = false;
    window.location.reload();
  } catch (error) {
    console.error("Erro ao salvar o produto:", error);
    alert("Erro ao atualizar o produto.");
  }
};

const deleteProduct = async (id) => {
  const userConfirmed = confirm("Você tem certeza que deseja deletar esse produto?");

  if (userConfirmed) {
    await axios.delete(`http://localhost:8080/api/v1/products/del/${id}`).then((r) => {
    }).catch(((e) => {
      alert("Produto deletado com sucesso!");
      window.location.reload();
    }))
  }
}

const saveProduct = async () => {
  try {
    await axios.post(`http://localhost:8080/api/v1/products/new`, {
      stock: productToBeSaved.value.stock,
      name: productToBeSaved.value.name,
      price: productToBeSaved.value.price,
    });
    alert("Produto Criado com sucesso!");
    overlayCreate.value = false;
    window.location.reload();
  } catch (error) {
    console.error("Erro ao salvar o produto:", error);
    alert("Erro ao salvar o produto.");
  }
}

onMounted(fetchProducts);
</script>

<template>
  <v-main>
    <v-container class="div-titulo">
      <h1>Produtos</h1>
    </v-container>

    <v-container>
      <v-btn @click="overlayCreate = !overlayCreate" color="green">
        <v-icon>mdi-plus</v-icon>&nbsp; Novo Produto
      </v-btn>

      <v-dialog width="500" v-model="overlayEdit">
        <v-card>
          <v-card-title class="d-flex justify-center">Editar Produto</v-card-title>
          <v-card-text>
            <v-text-field disabled
              v-model="selectedProduct.id"
              label="ID do Produto"
            ></v-text-field>
            <v-text-field
              v-model="selectedProduct.name"
              label="Nome do Produto"
            ></v-text-field>
            <v-text-field
              v-model="selectedProduct.price"
              label="Preço do Produto"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="selectedProduct.stock"
              label="Estoque do Produto"
              type="number"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green" @click="saveEditedProduct">Salvar</v-btn>
            <v-btn color="red" @click="overlayEdit = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog width="500" v-model="overlayCreate">
        <v-card>
          <v-card-title class="d-flex justify-center">Salvar Produto</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="productToBeSaved.name"
              label="Nome do Produto"
            ></v-text-field>
            <v-text-field
              v-model="productToBeSaved.price"
              label="Preço do Produto"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="productToBeSaved.stock"
              label="Estoque do Produto"
              type="number"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green" @click="saveProduct">Salvar</v-btn>
            <v-btn color="red" @click="overlayCreate = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-container>
    <v-container class="d-none d-md-block">
      <v-table>
        <thead>
        <tr>
          <th class="text-left">
            ID do Produto
          </th>
          <th class="text-left">
            Nome do Produto
          </th>
          <th class="text-left">
            Preço
          </th>
          <th class="text-left">
            Estoque
          </th>
          <th class="text-left">
            ...
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ formattedPrice(item.price) }}</td>
          <td>{{ item.stock }}</td>
          <td>
            <v-btn color="blue" title="Editar" @click="editProduct(item.id)">Editar</v-btn>
            &nbsp;
            <v-btn color="red" title="Deletar" @click="deleteProduct(item.id)">Deletar</v-btn>
          </td>
        </tr>
        </tbody>
      </v-table>
    </v-container>

    <v-container class="d-none d-block d-md-none">
      <v-row>
        <v-col v-for="item in products" :key="item.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle>Preço: {{ formattedPrice(item.price) }}</v-card-subtitle>
            <v-card-text>
              <div><strong>ID:</strong> {{ item.id }}</div>
              <div><strong>Estoque:</strong> {{ item.stock }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue" @click="editProduct(item.id)">Editar</v-btn>
              <v-btn color="red" @click="deleteProduct(item.id)">Deletar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
.div-titulo {
  display: flex;
  justify-content: center;
}

.container-modal-create-product {
  color: black;
  background: white;
  height: 500px;
  width: 500px;
}

</style>
