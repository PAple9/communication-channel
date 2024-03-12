import { NestFactory } from '@nestjs/core';
import {CommunicationModule} from "./communication.module";

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(CommunicationModule);
  await app.listen(PORT,() => console.log(`Server started on port ${PORT}`));
}
bootstrap();
