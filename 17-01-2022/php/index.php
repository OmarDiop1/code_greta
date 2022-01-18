<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>

    <?php
    $nom1 = "Omar";
    echo ("bonjour" . $nom . "\n\n");
    //body.innerHtml("Bonjour Marc")
    ?>

    <?php
    echo ("le prof s'appelle" . $nom);
    ?>

    <?php
    $nom2 = "Diallo";
    echo ("Bonjour <strong>" . $nom . "</strong>");
    ?>;

    <?php
    $nom3 = "Marc";
    ?>


    <?php
    if ($nom === "Esat") {
        echo "<div class = background>oui</div>";
    } else {
        echo "<div class = background2>non</div>";
    }
    ?>


    <?php
    $eleve = ["omar", "omar", "omar"];
    for ($i = 0; $i < count($eleve); $i++)
        echo ("<ul><li>" . $eleve[$i] . "</ul></li>");

    echo count($eleve);

    ?>;
    <?php
    $eleves2 = [
        "nom" => "eleve",
        "Esat" => "prof",
    ];
    $eleves2["Omar"];

    /**
     * eleves2 = {diallo : "eleve", "esat" : "prof"};
     * for (cle in eleves2) {
     * cle// diallo, puis esat etc...
     * let valeur = eleves2[cle]
     * // NON : let valeur = eleves2.cle // => eleves2["cle"]
     * }
     * 
     */

    echo ('<ul>');
    foreach ($eleves2 as $nom1 => $valeur) {
        echo ("<li>" . $nom2 . " => " . $valeur . "</li>");
    }
    echo ('</ul>');

    echo ('<ul>');
    echo ('<h3>Si on prend le tableau "normal" (ie non associatif');
    foreach ($eleves2 as $nom1 => $valeur) {
        #code"...
        echo ("<li>" . $nom2 . "=>" . $valeur . "</li>");
    }
    echo ('</ul>')
    ?>


    <?php
    $tableauEleves = [
        "Omar" => "eleves",
        "Marc" => "prof",
    ];

    echo ('<section>');
    foreach ($tableauEleves as $nom => $valeur) {
        if ($valeur === "eleves") {
            echo "<div class = 'background'>" . $nom . "\n\n" . $valeur . "</div>";
        } else {
            echo "<div class = 'background2'>" . $nom3 . "\n\n" . $valeur . "</div>";
        }
    }
    echo ('</section>');


    ?>






</body>

</html>