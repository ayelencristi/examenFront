import {Item} from "./Item";

export class Result {
  page: number;
  results: Item[];
  total_pages: number;
  total_results: number;
}
