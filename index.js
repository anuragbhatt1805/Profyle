import { PORT } from './src/constant.js';

import server from './src/server.js';


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});