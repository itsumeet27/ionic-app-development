import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

	items: Item[] = [];

	newItem: Item = <Item>{};

	@ViewChild('mylist')mylist: List;
  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) { 
  	this.plt.ready().then(() => {
  		this.loadItems();
  	});
  }

  //Create
  addItem(){
  	this.newItem.modified = Date.now();
  	this.newItem.id = Date.now();

  	this.storageService.addItem(this.newItem).then(item => {
  		this.newItem = <Item>{};
  		this.showToast('Item Added!')
  		this.loadItems();
  	});
  }

  //Read
  loadItems(){
  	this.storageService.getItems().then(items => {
  		this.items = items;
  	});
  }

  //Update
  updateItem(item: Item){
  	item.title = `UPDATED: ${item.title}`;
  	item.modified = Date.now();

  	this.storageService.updateItem(item).then(item => {
  		this.showToast('Item updated!');
  		this.mylist.closeSlidingItems();
  		this.loadItems();
  	});
  }

  //Delete
  deleteItem(item: Item){
  	this.storageService.deletedItem(item.id).then(item => {
  		this.showToast('Item removed!');
  		this.mylist.closeSlidingItems();
  		this.loadItems();
  	});
  }

  //Helper
  async showToast(msg){
  	const toast = await this.toastController.create({
  		message: msg,
  		duration: 2000
  	});
  	toast.present();
  }

  ngOnInit() {
  }

}
