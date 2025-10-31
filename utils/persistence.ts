export const persistence = {
  async setItem(key: string, value: string) {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, value);
  },
  async getItem(key: string) {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(key);
  },
  async removeItem(key: string) {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  },
  async clear() {
    if (typeof window === "undefined") return;
    localStorage.clear();
  },
};
