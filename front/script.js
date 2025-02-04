let button = document.getElementById("handleSubmit");

button.onclick = async function() {
    let tittle = document.getElementById("tittle").value;
    let description = document.getElementById("description").value;
    let data = {tittle,description}

    const response = await fetch ('http://localhost:3001/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success) {
        alert("Sucesso")
    } else{
        alert('Não');
    }
}