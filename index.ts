import { combineLatest, forkJoin, from, interval, merge, of, zip } from 'rxjs';
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
  combineLatestWith,
} from 'rxjs/operators';

let source1From$ = from(['a', 'b', 'c']);
let source2From$ = from(['x', 'y']);
let source1Of$ = of(['a', 'b', 'c']);
let source2Of$ = of(['x', 'y']);

console.log('---------------');
source1From$.subscribe((val) => console.log(val));
console.log('---------------');
source1Of$.subscribe((val) => console.log(val));
console.log('---------------');
source2From$.subscribe((val) => console.log(val));
console.log('---------------');
source2Of$.subscribe((val) => console.log(val));
console.log('---------------');
combineLatest(source1From$, source2From$).subscribe((val) => console.log(val));
console.log('---------------');
combineLatest(source1From$, source2From$).subscribe((val) => console.log(val));
console.log('---------------');
source1From$
  .pipe(combineLatestWith(source2From$))
  .subscribe((val) => console.log(val));

console.log('---------------');
source1Of$
  .pipe(combineLatestWith(source2Of$))
  .subscribe((val) => console.log(val));

console.log('---------------');
source1From$
  .pipe(
    concatMap(
      (_) => {
        console.log(_);
        return from(source2From$);
      },
      (a, b) => ({
        a,
        b,
      })
    )
  )
  .subscribe((val) => console.log(val));

console.log('---------------');
zip(source1From$, source2From$).subscribe((val) => console.log(val));
console.log('---------------');
zip(source1Of$, source2Of$).subscribe((val) => console.log(val));
console.log('---------------');
zip(source1Of$, source2From$).subscribe((val) => console.log(val));

console.log('---------------');
source1From$
  .pipe(withLatestFrom(source2From$))
  .subscribe((val) => console.log(val));

console.log('forkJoin---------------From');
forkJoin(source1From$, source2From$.pipe(startWith(0))).subscribe((val) =>
  console.log(val)
);
console.log('forkJoin---------------Of');
forkJoin(source1Of$, source2Of$).subscribe((val) => console.log(val));
