class MemoryCache<K, V> {
  private data = new Map<K, V>();

  set(key: K, value: V): void {
    this.data.set(key, value); // Belirtilen anahtar ve değeri cache'e ekler
  }

  get(key: K): V | undefined {
    return this.data.get(key); // Belirtilen anahtara karşılık gelen değeri döndürür, yoksa undefined
  }

  clear(): void {
    this.data.clear(); // Tüm cache verilerini temizler
  }
}

const cache = new MemoryCache<string, number>();
cache.set("user:1_score", 100);
console.log(cache.get("user:1_score"));
cache.clear();
console.log(cache.get("user:1_score"));

// BEKLENEN EKRAN ÇIKTISI:
// 100
// undefined