export class Notification {
    id: number;
    subject: string;
    content: string;
    level: string;
    data: {
        scanId: number;
    };
    unread: boolean;
    createdAt: any[];
    updatedAt: any[];

  // formattedName() {
  //   return this.name ?
  //     this.name[0].toUpperCase() + this.name.substr(1) : "";
  // }
  //
  // image() {
  //   return "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png"
  // }
}
