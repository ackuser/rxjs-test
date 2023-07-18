import { combineLatest, from, interval, merge, of } from 'rxjs';
import {
  concatMap,
  first,
  last,
  map,
  mergeAll,
  mergeMap,
  sample,
  startWith,
  withLatestFrom,
  combineLatestWith
} from 'rxjs/operators';
//emit value every 1s
const source1$ = of(['x', 'y']).pipe(startWith(''));
//sample last emitted value from source every 2s
const source2$ = from(['a', 'b', 'c']).pipe(startWith(''));
//output: 2..4..6..8..
const source3$ = combineLatest(source1$, source2$).pipe(
  map((x, y) => {
    return '' + x;
  })
);

let source1From$ = from(['a', 'b', 'c'])
let source1Of$ = of(['a', 'b', 'c'])
let source2From$ = from(['x','y'])
let source2Of$ = of(['x','y'])

console.log('---------------')
source1From$.subscribe((val) => console.log(val));
console.log('---------------')
source1Of$.subscribe((val) => console.log(val));
console.log('---------------')
source2From$.subscribe((val) => console.log(val));
console.log('---------------')
source2Of$.subscribe((val) => console.log(val));
console.log('---------------')
combineLatest(source1From$, source2From$).subscribe((val) => console.log(val));
console.log('---------------')
combineLatest(source1From$, source2From$).subscribe((val) => console.log(val));
console.log('---------------')
source1From$.pipe(combineLatestWith(source2From$)).subscribe((val) => console.log(val));


combineLatest(from(['a', 'b', 'c']),)

//source3$.subscribe((val) => console.log(val));

const source4$ = withLatestFrom([
  //of(0,1,2),
  source1$.pipe(startWith(null)),
  source2$.pipe(startWith(null)),
]);

