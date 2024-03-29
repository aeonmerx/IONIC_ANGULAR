import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  titulo!: string ;

  constructor(public alertController: AlertController) { }
  async presentData() {
    const input = await this.alertController.create({
      header: 'Please enter your info',
      subHeader: 'Welcome',
      inputs: [
        {
          name:'txtNombre',
          placeholder: 'Nombre',
        },
        {
          name:'txtNickName',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name:'txtNumber',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name:'descripcion',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel',
          handler: () =>{
            console.log("Confirm cancel");
          }
        },
        {
          text:'OK',
          handler: (datos) =>{
            let modificados = JSON.stringify(datos, null, 2)
            console.log("Confirm ok",datos);
            console.log(modificados);
            this.titulo = datos.txtNombre ;
          }
        }
        ]
     
    });

    await input.present();

  }
  ngOnInit() {
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentAlertTwo() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
