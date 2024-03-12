import {Body, Controller, HttpCode, Post} from "@nestjs/common";
import {MessageDto} from "./message.dto";

@Controller('')
export class CommunicationController{

    @Post('communications')
    @HttpCode(200)
    postMessage(@Body() messageDto:MessageDto):string{
        return('сообщение успешно поставлено в очередь для отправки')
    }
}