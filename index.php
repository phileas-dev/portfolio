<?php
$lang = 'en';

if (isset($_POST['lang'])) {
    $lang = $_POST['lang'];
    setcookie('lang', $lang, time() + 3600 * 24 * 30); // 30 days
    header("Location: ./");
    exit;
}
elseif (isset($_COOKIE['lang'])) {
    $lang = $_COOKIE['lang'];
}
else {
    $browserLang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    if (in_array($browserLang, ['en', 'fr', 'es'])) {
        $lang = $browserLang;
    }
}

$langFile = __DIR__ . "/lang/$lang.json";
if (!file_exists($langFile)) {
    $langFile = __DIR__ . "/lang/en.json";
    $lang = 'en';
}

$translations = json_decode(file_get_contents($langFile), true);

function t($key) {
    global $translations;
    return htmlspecialchars($translations[$key] ?? $key);
}
?>

<!DOCTYPE html>
<html lang="<?= $lang ?>">
<head>
    <script>window.currentLang = "<?= $lang ?>";</script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= t("title") ?></title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="canonical" href="psibien.dev/">
    <link rel="icon" type="image/x-icon" href="assets/fav.ico">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css">
</head>

<body>
    <header>
        <h1>Philéas SIBIEN</h1>
        <a href="https://www.linkedin.com/in/phil%C3%A9as-sibien/" target="_blank"><i id="linkedin" class="ph-fill ph-linkedin-logo"></i></a>
        <a href="https://github.com/phileas-dev/portfolio" target="_blank"><i id="github" class="ph-fill ph-github-logo"></i></a>
        <div id="lang-buttons">
            <button data-lang="en"><img class="lang-icon" src="./assets/flags/GB.png" draggable="false"></button>
            <button data-lang="fr"><img class="lang-icon" src="./assets/flags/FR.png" draggable="false"></button>
            <button data-lang="es"><img class="lang-icon" src="./assets/flags/ES.png" draggable="false"></button>
        </div>
    </header>

    <main>
        <p data-i18n="main"><?= t("main") ?></p>
    </main>

    <footer>
        <p data-i18n="footer_message"><?= t("footer_message")?></p>
    </footer>

    <script src="js/lang_switcher.js"></script>
</body>
</html>