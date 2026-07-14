document.getElementById('convertBtn').addEventListener('click', function() {
    const brlValue = parseFloat(document.getElementById('brlInput').value);
    const usdRate = 5.00; // Cotação fixa para a v1.0.0
    
    if (isNaN(brlValue) || brlValue <= 0) {
        document.getElementById('result').innerText = "Por favor, insira um valor válido.";
        return;
    }
    
    const converted = brlValue / usdRate;
    document.getElementById('result').innerText = `Resultado: $ ${converted.toFixed(2)} USD`;
});