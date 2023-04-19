function hilih(params){
    $.getJSON(`https://api.ibeng.tech/api/search/hilih?str=${params}&apikey=tamvan`,e =>{
    let output = document.getElementById('output')
    let newText = e.data['result']
    output.value = newText;
    })
}
$('#ubah').on('click',i =>{
    let text = document.getElementById('input').value;
    hilih(text);
})
