<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Info PHP</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="app">
        <header>
            <h1><i class="fas fa-info-circle"></i> Informations PHP</h1>
        </header>
        
        <main style="padding: 30px;">
            <?php
            
            $nom = "FSSM";
            $module = "Développement Web";
            $annee = 2025;
            
            $n1 = 15;
            $n2 = 3;
            
            $add = $n1 + $n2;
            $mult = $n1 * $n2;
            $div = $n1 / $n2;
            $sub = $n1 - $n2;
            
            echo "<h2>Informations</h2>";
            echo "<div class='result'>";
            echo "<p><strong>Établissement:</strong> $nom</p>";
            echo "<p><strong>Module:</strong> $module</p>";
            echo "<p><strong>Année:</strong> $annee</p>";
            echo "</div>";
            
            echo "<h2>Calculs</h2>";
            echo "<div class='result'>";
            echo "<p>$n1 + $n2 = $add</p>";
            echo "<p>$n1 × $n2 = $mult</p>";
            echo "<p>$n1 ÷ $n2 = " . round($div, 2) . "</p>";
            echo "<p>$n1 - $n2 = $sub</p>";
            echo "</div>";
            
            echo "<h2>Info PHP</h2>";
            echo "<div class='result'>";
            echo "<p>Version PHP: " . phpversion() . "</p>";
            echo "<p>Date: " . date('d/m/Y H:i:s') . "</p>";
            echo "</div>";
            ?>
            
            <div style="margin-top: 30px; text-align: center;">
                <a href="index.html" style="display: inline-block; padding: 10px 20px; background: var(--color2); color: white; text-decoration: none; border-radius: 8px;">
                    <i class="fas fa-arrow-left"></i> Retour à la calculatrice
                </a>
            </div>
        </main>
        
        <footer>
            <p>© 2025 - Page PHP</p>
            <a href="index.html">Retour calculatrice</a>
        </footer>
    </div>
</body>
</html>