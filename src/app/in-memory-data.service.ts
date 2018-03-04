import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const databases = [
      { id: 11, verbose: 'Mr. Nice', host: 'localhost', port: 3306 },
      { id: 12, verbose: 'Narco' , host: 'localhost', port: 3306 },
      { id: 13, verbose: 'Bombasto', host: 'localhost', port: 3306 },
      { id: 14, verbose: 'Celeritas', host: 'localhost', port: 3306 },
      { id: 15, verbose: 'Magneta', host: 'localhost', port: 3306 },
      { id: 16, verbose: 'RubberMan', host: 'localhost', port: 3306 },
      { id: 17, verbose: 'Dynama', host: 'localhost', port: 3306 },
      { id: 18, verbose: 'Dr IQ', host: 'localhost', port: 3306 },
      { id: 19, verbose: 'Magma', host: 'localhost', port: 3306 },
      { id: 20, verbose: 'Tornado', host: 'localhost', port: 3306 }
    ];
    return {databases};
  }
}
