let friends = [];

function addFriend() {
  const friend = document.getElementById("friend-input").value;
  if (friend === "") {
    alert("Por favor, preencha o campo nome.");
    return false;
  }

  friends.push(friend);
  console.log(friends);
  document.getElementById("friend-input").value = "";

  // Chama a função para atualizar a lista no HTML
  updateFriendList();
}

function updateFriendList() {
  const friendsList = document.getElementById("friends-list");

  // Limpa a lista existente
  friendsList.innerHTML = "";

  // Percorre o array friends e adiciona cada nome como um <li>
  for (let i = 0; i < friends.length; i++) {
    const friendName = friends[i];
    const listItem = document.createElement("li");
    listItem.textContent = friendName;
    friendsList.appendChild(listItem);
  }
}


// Função de sorteio (mantida do seu código)
function drawFriend() {
    // 1. Validar se há amigos disponíveis
    if (friends.length === 0) {
      alert("Adicione amigos para realizar o sorteio.");
      return;
    }
  
    // 2. Gerar um índice aleatório
    const randomIndex = Math.floor(Math.random() * friends.length);
  
    // 3. Obter o nome sorteado
    const drawnFriend = friends[randomIndex];
  
    // 4. Mostrar o resultado
    const elementResult = document.getElementById("result");
    elementResult.innerHTML = `O amigo secreto sorteado é: <strong>${drawnFriend}</strong>`;
  }