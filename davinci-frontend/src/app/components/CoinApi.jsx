'use client'

export default function CoinApi() {

    useEffect(() => {
        fetch("http://192.168.100.16:8080/api/users")
            .then(res => res.json())
            .then(data => setWords(data))
            .catch(error => console.error('Error fetching connections:', error));
    }, []);

    return (
        <main>
            
        </main>
    );
}
