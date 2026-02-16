    async function getRandomLineFromFile(url) {
    const resp = await fetch(url);
    const text = await resp.text();
    const lines = text.split(/\r?\n/).filter(Boolean);
    return lines[Math.floor(Math.random() * lines.length)];
    }

    (async () => {
    const url = "{% static 'catalog/words.txt' %}";
    const line = await getRandomLineFromFile(url);
    console.log("Randomly selected string:", line);
        })();