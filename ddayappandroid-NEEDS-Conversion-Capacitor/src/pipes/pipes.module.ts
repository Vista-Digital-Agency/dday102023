import { NgModule } from '@angular/core';
import { OrderNamesPipe } from './order-names/order-names';
import { MemorialSearchPipe } from './memorial-search/memorial-search';
@NgModule({
	declarations: [OrderNamesPipe,
    MemorialSearchPipe],
	imports: [],
	exports: [OrderNamesPipe,
    MemorialSearchPipe]
})
export class PipesModule {}
