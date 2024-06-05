// Sample data for console methods
let sampleData = {
    name: 'Anish Devineni',
    age: 21,
    hobbies: ['reading', 'gaming', 'coding']
  };
  
  class CustomError extends Error {
    constructor(message, customMessage) {
      super(message);
      this.name = 'CustomError';
      this.customMessage = customMessage;
    }
  }
  
  function demonstrateTryCatch() {
    try {
      // Try to access a property on an undefined object
      let undefinedObject;
      console.log(undefinedObject.property);
    } catch (error) {
      // Throw a custom error
      throw new CustomError('An error occurred:', 'This is a custom error message');
    } finally {
      // This block will be executed regardless of whether an error occurred
      console.log('demonstrateTryCatch function executed');
    }
  }
  
  window.onerror = function(message, source, lineno, colno, error) {
    console.log(`An error occurred: ${message}`);
  };
  
  errorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switch (btn.textContent) {
        case 'Trigger a Global Error':
          // Cause an error
          let undefinedObject;
          console.log(undefinedObject.property);
          break;
        case 'Console Log':
          console.log(sampleData);
          break;
        case 'Console Error':
          console.error(sampleData);
          break;
        case 'Console Count':
          console.count(sampleData);
          break;
        case 'Console Warn':
          console.warn("Console warn button");
          break;
        case 'Console Assert':
          console.assert(sampleData.age > 50, 'Age is not greater than 50');
          break;
        case 'Console Clear':
          console.clear();
          break;
        case 'Console Dir':
          console.dir(sampleData);
          break;
        case 'Console dirxml':
          console.dirxml(document.body);
          break;
        case 'Console Group Start':
          console.group('Sample Group');
          console.log(sampleData);
          break;
        case 'Console Group End':
          console.groupEnd();
          console.log('Group ended');
          break;
        case 'Console Table':
          console.table(sampleData);
          break;
        case 'Start Timer':
          console.time('Sample Timer');
          break;
        case 'End Timer':
          console.timeEnd('Sample Timer');
          break;
        case 'Console Trace':
          console.trace('Sample Trace');
          break;
        case 'Demonstrate Try/Catch':
          console.log('Demonstrating try/catch');
          try {
            demonstrateTryCatch();
          } catch (error) {
            console.error(error);
          }
          break;
      }
    });
  });