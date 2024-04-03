class apiError extends Error {
  constructor(error: any) {
    super(typeof error.message == "string" ? error.message : "Unknown Error");
    this.name = `API Error${
      typeof error.message !== "string" ? ` [${error.message.code}]` : ""
    }`;
    return this;
  }
}

export default apiError;
