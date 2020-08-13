export interface ExamplePage {
  id: number;
  title: string;
  content: string;
  dateString: string;
  baseImageName: string;
  pageType: PageType;
  isFavourite: boolean;
}

export enum PageType {
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
