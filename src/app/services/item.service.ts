import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Item[] = [];
  private nextId = 1;

  constructor() {}

  getItems(): Item[] {
    return this.items;
  }

  addItem(nome: string): void {
    this.items.push({ id: this.nextId++, nome, comprado: false });
  }

  editItem(id: number, nome: string): void {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.nome = nome;
    }
  }

  toggleItemComprado(id: number): void {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.comprado = !item.comprado;
    }
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(i => i.id !== id);
  }
}

