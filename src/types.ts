export interface ExamplePage {
  id: number;
  title: string;
  content: string;
  icon: string;
  category: Category;
  isFavourite: boolean;
}

export enum Category {
  Home = 'HOME',
  KitchenSink = 'KITCHEN_SINK'
}


// Store root state
export interface RootState {
  topToolbar: TopToolbarState;
}

// Store modules state
export interface TopToolbarState {
  title: string;
}
