import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  result: string | undefined;
  data!: [] ;
  r!: string;
  constructor(public actionSheetController: ActionSheetController) { }
 async api(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/10');
    const data = await response.json();
    console.log(data.title);
    this.r = data.title;
  
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
backdropDismiss:false,
cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass:'rojo',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          role: 'shared',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          role: 'played',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          role: 'In Favorite Role',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
    const result = await actionSheet.onDidDismiss();
    let jsonData: any = {
      role: result.role,
      data: {}
    }
    // Verifica si el rol existe en el objeto 'result' y agrega la propiedad 'text' al objeto 'data' si es así
    if (result.role) {
      jsonData.data = "Has seleccionado el rol " + result.role ;
    }

    // Convierte el objeto JSON a una cadena JSON formateada
    this.result = JSON.stringify(jsonData, null, 2);
    console.log(this.result);
  }
  

  ngOnInit() {
  }

}
