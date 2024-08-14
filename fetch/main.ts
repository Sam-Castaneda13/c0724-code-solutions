async function getData(): Promise<void> {
  const url =
    'https://raw.githubusercontent.com/ajhyndman/fire-emblem-working-title/master/packages/fire-emblem-heroes-stats/stats.json';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log('hello', json[0]);
  } catch (error) {
    console.error('what');
  }
}

getData();
