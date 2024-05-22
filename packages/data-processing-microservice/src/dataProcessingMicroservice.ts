function processData(data: any[]): any[] {
    // Example data processing logic
    return data.map(item => ({ id: item.id, processedValue: item.value * 2 }));
  }
  
  export { processData };