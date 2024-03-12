export class MessageDto{
    Sender:string
    Recipient:string
    Message:string
    constructor(Sender,Recipient,Message) {

        this.Sender = Sender;
        this.Recipient = Recipient;
        this.Message = Message;
    }
}