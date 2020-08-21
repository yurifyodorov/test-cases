export interface ExamplePage {
  id: number;
  title: string;
  content: string;
  icon: string;
  category: Category;
  isWaiting: boolean;
  inProgress: boolean;
  isDone: boolean;
}

export enum Category {
  Commands = 'COMMANDS'
}


// Store root state
export interface RootState {
  topToolbar: TopToolbarState;
}

// Store modules state
export interface TopToolbarState {
  title: string;
}
