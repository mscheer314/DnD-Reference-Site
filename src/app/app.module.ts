import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterListItemComponent } from './monster-list-item/monster-list-item.component';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [AppComponent, MonsterListItemComponent, MonsterListComponent, HeaderComponent, SearchBoxComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
