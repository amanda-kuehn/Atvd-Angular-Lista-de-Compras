import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class ListaComponent {
  novoItem = '';
  items: Item[] = [];

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }

  get naoComprados(): Item[] {
    return this.items.filter(item => !item.comprado);
  }

  get comprados(): Item[] {
    return this.items.filter(item => item.comprado);
  }

  adicionarItem(): void {
    if (this.novoItem.trim()) {
      this.itemService.addItem(this.novoItem.trim());
      this.novoItem = '';
    }
  }

  editarItem(item: Item): void {
    if (item.nome.trim()) {
      this.itemService.editItem(item.id, item.nome.trim());
    }
  }

  marcarComoComprado(item: Item): void {
    this.itemService.toggleItemComprado(item.id);
  }

  excluirItem(id: number): void {
    this.itemService.deleteItem(id);
  }
}

