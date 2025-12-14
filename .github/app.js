// Variables
let history = [];
let historyId = 1;

// Éléments DOM
const form = document.getElementById('calc-form');
const numA = document.getElementById('numA');
const numB = document.getElementById('numB');
const operation = document.getElementById('operation');
const result = document.getElementById('result');
const errors = document.getElementById('errors');
const historyList = document.getElementById('history-list');
const clearBtn = document.getElementById('clear-history');
const totalOps = document.getElementById('total-ops');

// Symboles d'opération
const symbols = {
    'add': '+',
    'subtract': '−',
    'multiply': '×',
    'divide': '÷'
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadHistory();
    form.addEventListener('submit', handleSubmit);
    clearBtn.addEventListener('click', clearHistory);
});

// Gérer le calcul
function handleSubmit(e) {
    e.preventDefault();
    clearErrors();
    
    const a = parseFloat(numA.value);
    const b = parseFloat(numB.value);
    const op = operation.value;
    
    // Validation
    if (isNaN(a) || isNaN(b)) {
        showError('Veuillez entrer deux nombres valides');
        return;
    }
    
    if (op === 'divide' && b === 0) {
        showError('Division par zéro impossible');
        return;
    }
    
    // Calcul
    let res;
    switch(op) {
        case 'add': res = a + b; break;
        case 'subtract': res = a - b; break;
        case 'multiply': res = a * b; break;
        case 'divide': res = a / b; break;
    }
    
    // Afficher résultat
    result.textContent = res.toFixed(2);
    
    // Ajouter à l'historique
    addToHistory(a, b, op, res);
}

// Ajouter à l'historique
function addToHistory(a, b, op, res) {
    const calc = {
        id: historyId++,
        a: a,
        b: b,
        op: op,
        symbol: symbols[op],
        result: res,
        time: new Date().toLocaleTimeString()
    };
    
    history.unshift(calc);
    if (history.length > 10) history.pop();
    
    saveHistory();
    updateHistory();
}

// Mettre à jour l'historique
function updateHistory() {
    historyList.innerHTML = '';
    
    if (history.length === 0) {
        historyList.innerHTML = '<li class="empty">Aucune opération</li>';
    } else {
        history.forEach(calc => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${calc.a} ${calc.symbol} ${calc.b}</span>
                <span>= ${calc.result.toFixed(2)}</span>
                <small>${calc.time}</small>
            `;
            historyList.appendChild(li);
        });
    }
    
    totalOps.textContent = history.length;
}

// Afficher erreur
function showError(msg) {
    errors.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${msg}`;
    errors.classList.add('show');
    result.textContent = '-';
}

// Effacer erreurs
function clearErrors() {
    errors.classList.remove('show');
}

// Effacer historique
function clearHistory() {
    if (history.length > 0 && confirm('Effacer tout l\'historique ?')) {
        history = [];
        historyId = 1;
        saveHistory();
        updateHistory();
    }
}

// Sauvegarder dans localStorage
function saveHistory() {
    localStorage.setItem('calcHistory', JSON.stringify(history));
    localStorage.setItem('nextId', historyId.toString());
}

// Charger depuis localStorage
function loadHistory() {
    const saved = localStorage.getItem('calcHistory');
    const id = localStorage.getItem('nextId');
    
    if (saved) history = JSON.parse(saved);
    if (id) historyId = parseInt(id);
    
    updateHistory();
}