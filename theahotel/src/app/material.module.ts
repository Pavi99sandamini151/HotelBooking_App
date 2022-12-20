import { NgModule } from "@angular/core";
// @ts-ignore
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

@NgModule({
  imports: [ MatBadgeModule,
             MatButtonModule,
             MatToolbarModule,
             MatIconModule,
             MatListModule
           ],
  exports: [ MatBadgeModule,
             MatButtonModule,
             MatToolbarModule,
             MatIconModule,
             MatListModule
           ]
})

export class MaterialModule {}
