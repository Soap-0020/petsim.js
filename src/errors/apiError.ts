class apiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "apiError";
    return this;
  }
}

export default apiError;
