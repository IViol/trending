export const getJSON = (subject: string) => fetch(`http://localhost:8010/proxy/${subject}`).then(r => r.json())
