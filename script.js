function clickNumbers() {
    let number = event.target.value;

    let txtValue = document.getElementById("numberType").value;

    document.getElementById("numberType").value = txtValue + number;
}