// Automatically generated with Reach 0.1.12 (ae94865f)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (ae94865f)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v430 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v431 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v431, v430],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:101:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v431, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v435, v436], secs: v438, time: v437, didSend: v95, from: v434 } = txn1;
      
      sim_r.txns.push({
        amt: v435,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v447 = stdlib.safeAdd(v437, v436);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v435, v436], secs: v438, time: v437, didSend: v95, from: v434 } = txn1;
  ;
  const v447 = stdlib.safeAdd(v437, v436);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v447],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v434, v435, v436, v447],
      evt_cnt: 0,
      funcNum: 2,
      lct: v437,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v653, time: v652, didSend: v349, from: v651 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v434,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v653, time: v652, didSend: v349, from: v651 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:94:52:application',
      fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:93:28:function exp)', 'at ./index.rsh:108:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v453, time: v452, didSend: v104, from: v451 } = txn2;
    const v455 = stdlib.add(v435, v435);
    ;
    let v456 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v457 = v452;
    let v464 = v455;
    
    let txn3 = txn2;
    while (await (async () => {
      const v468 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v468;})()) {
      let v469 = stdlib.checkedBigNumberify('./index.rsh:114:41:decimal', stdlib.UInt_max, '0');
      let v470 = stdlib.checkedBigNumberify('./index.rsh:114:44:decimal', stdlib.UInt_max, '0');
      let v471 = stdlib.checkedBigNumberify('./index.rsh:114:38:decimal', stdlib.UInt_max, '0');
      let v472 = v457;
      let v479 = v464;
      
      let txn4 = txn3;
      while (await (async () => {
        const v483 = stdlib.lt(v471, stdlib.checkedBigNumberify('./index.rsh:116:20:decimal', stdlib.UInt_max, '3'));
        
        return v483;})()) {
        const v490 = stdlib.safeAdd(v472, v436);
        const v494 = stdlib.protect(ctc0, await interact.pickFinger(), {
          at: './index.rsh:120:49:application',
          fs: ['at ./index.rsh:119:17:application call to [unknown function] (defined at: ./index.rsh:119:21:function exp)'],
          msg: 'pickFinger',
          who: 'Alice'
          });
        const v495 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:64:31:application',
          fs: ['at ./index.rsh:121:70:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:119:17:application call to [unknown function] (defined at: ./index.rsh:119:21:function exp)'],
          msg: 'random',
          who: 'Alice'
          });
        const v496 = stdlib.digest([ctc0, ctc0], [v495, v494]);
        const v498 = stdlib.protect(ctc0, await interact.guessResult(), {
          at: './index.rsh:127:55:application',
          fs: ['at ./index.rsh:119:17:application call to [unknown function] (defined at: ./index.rsh:119:21:function exp)'],
          msg: 'guessResult',
          who: 'Alice'
          });
        const v499 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:64:31:application',
          fs: ['at ./index.rsh:128:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:119:17:application call to [unknown function] (defined at: ./index.rsh:119:21:function exp)'],
          msg: 'random',
          who: 'Alice'
          });
        const v500 = stdlib.digest([ctc0, ctc0], [v499, v498]);
        
        const txn5 = await (ctc.sendrecv({
          args: [v434, v435, v436, v451, v469, v470, v471, v479, v490, v496, v500],
          evt_cnt: 2,
          funcNum: 6,
          lct: v472,
          onlyIf: true,
          out_tys: [ctc1, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:134:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v503, v504], secs: v506, time: v505, didSend: v140, from: v502 } = txn5;
            
            ;
            const v514 = stdlib.safeAdd(v505, v436);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v490],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v434, v435, v436, v451, v469, v470, v471, v479, v490],
            evt_cnt: 0,
            funcNum: 7,
            lct: v472,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v613, time: v612, didSend: v292, from: v611 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v451,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v613, time: v612, didSend: v292, from: v611 } = txn6;
          ;
          const v614 = stdlib.addressEq(v434, v611);
          const v615 = stdlib.addressEq(v451, v611);
          const v616 = v614 ? true : v615;
          stdlib.assert(v616, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:136:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:94:52:application',
            fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:93:28:function exp)', 'at ./index.rsh:136:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v503, v504], secs: v506, time: v505, didSend: v140, from: v502 } = txn5;
          ;
          const v507 = stdlib.addressEq(v434, v502);
          stdlib.assert(v507, {
            at: './index.rsh:134:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v514 = stdlib.safeAdd(v505, v436);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v514],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v434, v435, v436, v451, v469, v470, v471, v479, v503, v504, v514],
              evt_cnt: 0,
              funcNum: 9,
              lct: v505,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v597, time: v596, didSend: v258, from: v595 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v434,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc1, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v597, time: v596, didSend: v258, from: v595 } = txn7;
            ;
            const v598 = stdlib.addressEq(v434, v595);
            const v599 = stdlib.addressEq(v451, v595);
            const v600 = v598 ? true : v599;
            stdlib.assert(v600, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:147:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:94:52:application',
              fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:93:28:function exp)', 'at ./index.rsh:147:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v521, v522], secs: v524, time: v523, didSend: v152, from: v520 } = txn6;
            ;
            const v525 = stdlib.addressEq(v451, v520);
            stdlib.assert(v525, {
              at: './index.rsh:145:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v532 = stdlib.safeAdd(v523, v436);
            const txn7 = await (ctc.sendrecv({
              args: [v434, v435, v436, v451, v469, v470, v471, v479, v503, v504, v521, v522, v532, v494, v495, v498, v499],
              evt_cnt: 4,
              funcNum: 10,
              lct: v523,
              onlyIf: true,
              out_tys: [ctc0, ctc0, ctc0, ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:161:13:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v537, v538, v539, v540], secs: v542, time: v541, didSend: v164, from: v536 } = txn7;
                
                ;
                const v548 = stdlib.eq(v539, v522);
                let v549;
                if (v548) {
                  v549 = stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  const v550 = stdlib.safeAdd(v537, v521);
                  const v551 = stdlib.eq(v550, v539);
                  let v552;
                  if (v551) {
                    v552 = stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0');
                    }
                  else {
                    const v554 = stdlib.eq(v550, v522);
                    const v555 = v554 ? stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '1');
                    v552 = v555;
                    }
                  v549 = v552;
                  }
                
                const v562 = stdlib.eq(v549, stdlib.checkedBigNumberify('./index.rsh:183:20:decimal', stdlib.UInt_max, '0'));
                let v563;
                if (v562) {
                  const v564 = stdlib.safeAdd(v469, stdlib.checkedBigNumberify('./index.rsh:184:25:decimal', stdlib.UInt_max, '2'));
                  const v565 = stdlib.safeAdd(v471, stdlib.checkedBigNumberify('./index.rsh:184:48:decimal', stdlib.UInt_max, '1'));
                  const v566 = [v564, v470, v565];
                  v563 = v566;
                  }
                else {
                  const v567 = stdlib.eq(v549, stdlib.checkedBigNumberify('./index.rsh:185:24:decimal', stdlib.UInt_max, '2'));
                  let v568;
                  if (v567) {
                    const v569 = stdlib.safeAdd(v470, stdlib.checkedBigNumberify('./index.rsh:186:37:decimal', stdlib.UInt_max, '2'));
                    const v570 = stdlib.safeAdd(v471, stdlib.checkedBigNumberify('./index.rsh:186:48:decimal', stdlib.UInt_max, '1'));
                    const v571 = [v469, v569, v570];
                    v568 = v571;
                    }
                  else {
                    const v572 = stdlib.safeAdd(v469, stdlib.checkedBigNumberify('./index.rsh:187:25:decimal', stdlib.UInt_max, '1'));
                    const v573 = stdlib.safeAdd(v470, stdlib.checkedBigNumberify('./index.rsh:187:37:decimal', stdlib.UInt_max, '1'));
                    const v574 = stdlib.safeAdd(v471, stdlib.checkedBigNumberify('./index.rsh:187:48:decimal', stdlib.UInt_max, '1'));
                    const v575 = [v572, v573, v574];
                    v568 = v575;
                    }
                  v563 = v568;
                  }
                const v576 = v563[stdlib.checkedBigNumberify('./index.rsh:182:7:array', stdlib.UInt_max, '0')];
                const v577 = v563[stdlib.checkedBigNumberify('./index.rsh:182:7:array', stdlib.UInt_max, '1')];
                const v578 = v563[stdlib.checkedBigNumberify('./index.rsh:182:7:array', stdlib.UInt_max, '2')];
                const cv469 = v576;
                const cv470 = v577;
                const cv471 = v578;
                const cv472 = v541;
                const cv479 = v479;
                
                await (async () => {
                  const v469 = cv469;
                  const v470 = cv470;
                  const v471 = cv471;
                  const v472 = cv472;
                  const v479 = cv479;
                  
                  if (await (async () => {
                    const v483 = stdlib.lt(v471, stdlib.checkedBigNumberify('./index.rsh:116:20:decimal', stdlib.UInt_max, '3'));
                    
                    return v483;})()) {
                    const v490 = stdlib.safeAdd(v472, v436);
                    sim_r.isHalt = false;
                    }
                  else {
                    
                    sim_r.isHalt = false;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v532],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v434, v435, v436, v451, v469, v470, v471, v479, v503, v504, v521, v522, v532],
                evt_cnt: 0,
                funcNum: 11,
                lct: v523,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v581, time: v580, didSend: v224, from: v579 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v451,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v581, time: v580, didSend: v224, from: v579 } = txn8;
              ;
              const v582 = stdlib.addressEq(v434, v579);
              const v583 = stdlib.addressEq(v451, v579);
              const v584 = v582 ? true : v583;
              stdlib.assert(v584, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:163:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:94:52:application',
                fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:93:28:function exp)', 'at ./index.rsh:163:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v537, v538, v539, v540], secs: v542, time: v541, didSend: v164, from: v536 } = txn7;
              ;
              const v543 = stdlib.addressEq(v434, v536);
              stdlib.assert(v543, {
                at: './index.rsh:161:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v544 = stdlib.digest([ctc0, ctc0], [v538, v537]);
              const v545 = stdlib.digestEq(v503, v544);
              stdlib.assert(v545, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:166:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v546 = stdlib.digest([ctc0, ctc0], [v540, v539]);
              const v547 = stdlib.digestEq(v504, v546);
              stdlib.assert(v547, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:167:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v548 = stdlib.eq(v539, v522);
              let v549;
              if (v548) {
                v549 = stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '1');
                }
              else {
                const v550 = stdlib.safeAdd(v537, v521);
                const v551 = stdlib.eq(v550, v539);
                let v552;
                if (v551) {
                  v552 = stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v554 = stdlib.eq(v550, v522);
                  const v555 = v554 ? stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '1');
                  v552 = v555;
                  }
                v549 = v552;
                }
              stdlib.protect(ctc2, await interact.roundWinner(v549), {
                at: './index.rsh:177:29:application',
                fs: ['at ./index.rsh:176:11:application call to [unknown function] (defined at: ./index.rsh:176:29:function exp)'],
                msg: 'roundWinner',
                who: 'Alice'
                });
              const v558 = stdlib.safeAdd(v537, v521);
              stdlib.protect(ctc2, await interact.seeWinning(v558), {
                at: './index.rsh:179:28:application',
                fs: ['at ./index.rsh:176:11:application call to [unknown function] (defined at: ./index.rsh:176:29:function exp)'],
                msg: 'seeWinning',
                who: 'Alice'
                });
              
              const v562 = stdlib.eq(v549, stdlib.checkedBigNumberify('./index.rsh:183:20:decimal', stdlib.UInt_max, '0'));
              let v563;
              if (v562) {
                const v564 = stdlib.safeAdd(v469, stdlib.checkedBigNumberify('./index.rsh:184:25:decimal', stdlib.UInt_max, '2'));
                const v565 = stdlib.safeAdd(v471, stdlib.checkedBigNumberify('./index.rsh:184:48:decimal', stdlib.UInt_max, '1'));
                const v566 = [v564, v470, v565];
                v563 = v566;
                }
              else {
                const v567 = stdlib.eq(v549, stdlib.checkedBigNumberify('./index.rsh:185:24:decimal', stdlib.UInt_max, '2'));
                let v568;
                if (v567) {
                  const v569 = stdlib.safeAdd(v470, stdlib.checkedBigNumberify('./index.rsh:186:37:decimal', stdlib.UInt_max, '2'));
                  const v570 = stdlib.safeAdd(v471, stdlib.checkedBigNumberify('./index.rsh:186:48:decimal', stdlib.UInt_max, '1'));
                  const v571 = [v469, v569, v570];
                  v568 = v571;
                  }
                else {
                  const v572 = stdlib.safeAdd(v469, stdlib.checkedBigNumberify('./index.rsh:187:25:decimal', stdlib.UInt_max, '1'));
                  const v573 = stdlib.safeAdd(v470, stdlib.checkedBigNumberify('./index.rsh:187:37:decimal', stdlib.UInt_max, '1'));
                  const v574 = stdlib.safeAdd(v471, stdlib.checkedBigNumberify('./index.rsh:187:48:decimal', stdlib.UInt_max, '1'));
                  const v575 = [v572, v573, v574];
                  v568 = v575;
                  }
                v563 = v568;
                }
              const v576 = v563[stdlib.checkedBigNumberify('./index.rsh:182:7:array', stdlib.UInt_max, '0')];
              const v577 = v563[stdlib.checkedBigNumberify('./index.rsh:182:7:array', stdlib.UInt_max, '1')];
              const v578 = v563[stdlib.checkedBigNumberify('./index.rsh:182:7:array', stdlib.UInt_max, '2')];
              const cv469 = v576;
              const cv470 = v577;
              const cv471 = v578;
              const cv472 = v541;
              const cv479 = v479;
              
              v469 = cv469;
              v470 = cv470;
              v471 = cv471;
              v472 = cv472;
              v479 = cv479;
              
              txn4 = txn7;
              continue;}
            
            }
          
          }
        
        }
      stdlib.protect(ctc2, await interact.endGame(), {
        at: './index.rsh:192:50:application',
        fs: ['at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:19:function exp)'],
        msg: 'endGame',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v434, v435, v436, v451, v469, v470, v479, null],
        evt_cnt: 1,
        funcNum: 5,
        lct: v472,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:195:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v630], secs: v632, time: v631, didSend: v315, from: v629 } = txn5;
          
          ;
          const v634 = stdlib.gt(v469, v470);
          const v635 = stdlib.gt(v470, v469);
          const v636 = v635 ? stdlib.checkedBigNumberify('./index.rsh:197:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:197:59:decimal', stdlib.UInt_max, '1');
          const v637 = v634 ? stdlib.checkedBigNumberify('./index.rsh:197:31:decimal', stdlib.UInt_max, '0') : v636;
          const cv456 = v637;
          const cv457 = v631;
          const cv464 = v479;
          
          await (async () => {
            const v456 = cv456;
            const v457 = cv457;
            const v464 = cv464;
            
            if (await (async () => {
              const v468 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              
              return v468;})()) {
              const v469 = stdlib.checkedBigNumberify('./index.rsh:114:41:decimal', stdlib.UInt_max, '0');
              const v470 = stdlib.checkedBigNumberify('./index.rsh:114:44:decimal', stdlib.UInt_max, '0');
              const v471 = stdlib.checkedBigNumberify('./index.rsh:114:38:decimal', stdlib.UInt_max, '0');
              const v472 = v457;
              const v479 = v464;
              
              if (await (async () => {
                const v483 = stdlib.lt(v471, stdlib.checkedBigNumberify('./index.rsh:116:20:decimal', stdlib.UInt_max, '3'));
                
                return v483;})()) {
                const v490 = stdlib.safeAdd(v472, v436);
                sim_r.isHalt = false;
                }
              else {
                
                sim_r.isHalt = false;
                }}
            else {
              const v638 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:201:12:decimal', stdlib.UInt_max, '2'), v435);
              const v639 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v640 = v639 ? v434 : v451;
              sim_r.txns.push({
                kind: 'from',
                to: v640,
                tok: undefined /* Nothing */
                });
              
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v630], secs: v632, time: v631, didSend: v315, from: v629 } = txn5;
      ;
      const v633 = stdlib.addressEq(v434, v629);
      stdlib.assert(v633, {
        at: './index.rsh:195:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v634 = stdlib.gt(v469, v470);
      const v635 = stdlib.gt(v470, v469);
      const v636 = v635 ? stdlib.checkedBigNumberify('./index.rsh:197:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:197:59:decimal', stdlib.UInt_max, '1');
      const v637 = v634 ? stdlib.checkedBigNumberify('./index.rsh:197:31:decimal', stdlib.UInt_max, '0') : v636;
      const cv456 = v637;
      const cv457 = v631;
      const cv464 = v479;
      
      v456 = cv456;
      v457 = cv457;
      v464 = cv464;
      
      txn3 = txn5;
      continue;
      
      }
    const v638 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:201:12:decimal', stdlib.UInt_max, '2'), v435);
    const v639 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v640 = v639 ? v434 : v451;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v456), {
      at: './index.rsh:205:24:application',
      fs: ['at ./index.rsh:204:7:application call to [unknown function] (defined at: ./index.rsh:204:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v435, v436], secs: v438, time: v437, didSend: v95, from: v434 } = txn1;
  ;
  const v447 = stdlib.safeAdd(v437, v436);
  stdlib.protect(ctc1, await interact.acceptWager(v435), {
    at: './index.rsh:105:25:application',
    fs: ['at ./index.rsh:104:11:application call to [unknown function] (defined at: ./index.rsh:104:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v434, v435, v436, v447],
    evt_cnt: 0,
    funcNum: 1,
    lct: v437,
    onlyIf: true,
    out_tys: [],
    pay: [v435, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v453, time: v452, didSend: v104, from: v451 } = txn2;
      
      const v455 = stdlib.add(v435, v435);
      sim_r.txns.push({
        amt: v435,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v456 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v457 = v452;
      const v464 = v455;
      
      if (await (async () => {
        const v468 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v468;})()) {
        const v469 = stdlib.checkedBigNumberify('./index.rsh:114:41:decimal', stdlib.UInt_max, '0');
        const v470 = stdlib.checkedBigNumberify('./index.rsh:114:44:decimal', stdlib.UInt_max, '0');
        const v471 = stdlib.checkedBigNumberify('./index.rsh:114:38:decimal', stdlib.UInt_max, '0');
        const v472 = v457;
        const v479 = v464;
        
        if (await (async () => {
          const v483 = stdlib.lt(v471, stdlib.checkedBigNumberify('./index.rsh:116:20:decimal', stdlib.UInt_max, '3'));
          
          return v483;})()) {
          const v490 = stdlib.safeAdd(v472, v436);
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        const v638 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:201:12:decimal', stdlib.UInt_max, '2'), v435);
        const v639 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v640 = v639 ? v434 : v451;
        sim_r.txns.push({
          kind: 'from',
          to: v640,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v447],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v434, v435, v436, v447],
      evt_cnt: 0,
      funcNum: 2,
      lct: v437,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v653, time: v652, didSend: v349, from: v651 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v434,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v653, time: v652, didSend: v349, from: v651 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:94:52:application',
      fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:93:28:function exp)', 'at ./index.rsh:108:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v453, time: v452, didSend: v104, from: v451 } = txn2;
    const v455 = stdlib.add(v435, v435);
    ;
    let v456 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v457 = v452;
    let v464 = v455;
    
    let txn3 = txn2;
    while (await (async () => {
      const v468 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v468;})()) {
      let v469 = stdlib.checkedBigNumberify('./index.rsh:114:41:decimal', stdlib.UInt_max, '0');
      let v470 = stdlib.checkedBigNumberify('./index.rsh:114:44:decimal', stdlib.UInt_max, '0');
      let v471 = stdlib.checkedBigNumberify('./index.rsh:114:38:decimal', stdlib.UInt_max, '0');
      let v472 = v457;
      let v479 = v464;
      
      let txn4 = txn3;
      while (await (async () => {
        const v483 = stdlib.lt(v471, stdlib.checkedBigNumberify('./index.rsh:116:20:decimal', stdlib.UInt_max, '3'));
        
        return v483;})()) {
        const v490 = stdlib.safeAdd(v472, v436);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc2, ctc2],
          timeoutAt: ['time', v490],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v434, v435, v436, v451, v469, v470, v471, v479, v490],
            evt_cnt: 0,
            funcNum: 7,
            lct: v472,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v613, time: v612, didSend: v292, from: v611 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v451,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v613, time: v612, didSend: v292, from: v611 } = txn6;
          ;
          const v614 = stdlib.addressEq(v434, v611);
          const v615 = stdlib.addressEq(v451, v611);
          const v616 = v614 ? true : v615;
          stdlib.assert(v616, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:136:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:94:52:application',
            fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:93:28:function exp)', 'at ./index.rsh:136:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v503, v504], secs: v506, time: v505, didSend: v140, from: v502 } = txn5;
          ;
          const v507 = stdlib.addressEq(v434, v502);
          stdlib.assert(v507, {
            at: './index.rsh:134:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v514 = stdlib.safeAdd(v505, v436);
          const v518 = stdlib.protect(ctc0, await interact.pickFinger(), {
            at: './index.rsh:142:57:application',
            fs: ['at ./index.rsh:141:15:application call to [unknown function] (defined at: ./index.rsh:141:19:function exp)'],
            msg: 'pickFinger',
            who: 'Bob'
            });
          const v519 = stdlib.protect(ctc0, await interact.guessResult(), {
            at: './index.rsh:143:63:application',
            fs: ['at ./index.rsh:141:15:application call to [unknown function] (defined at: ./index.rsh:141:19:function exp)'],
            msg: 'guessResult',
            who: 'Bob'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v434, v435, v436, v451, v469, v470, v471, v479, v503, v504, v514, v518, v519],
            evt_cnt: 2,
            funcNum: 8,
            lct: v505,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:145:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v521, v522], secs: v524, time: v523, didSend: v152, from: v520 } = txn6;
              
              ;
              const v532 = stdlib.safeAdd(v523, v436);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v514],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v434, v435, v436, v451, v469, v470, v471, v479, v503, v504, v514],
              evt_cnt: 0,
              funcNum: 9,
              lct: v505,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v597, time: v596, didSend: v258, from: v595 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v434,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v597, time: v596, didSend: v258, from: v595 } = txn7;
            ;
            const v598 = stdlib.addressEq(v434, v595);
            const v599 = stdlib.addressEq(v451, v595);
            const v600 = v598 ? true : v599;
            stdlib.assert(v600, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:147:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:94:52:application',
              fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:93:28:function exp)', 'at ./index.rsh:147:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v521, v522], secs: v524, time: v523, didSend: v152, from: v520 } = txn6;
            ;
            const v525 = stdlib.addressEq(v451, v520);
            stdlib.assert(v525, {
              at: './index.rsh:145:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v532 = stdlib.safeAdd(v523, v436);
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 4,
              funcNum: 10,
              out_tys: [ctc0, ctc0, ctc0, ctc0],
              timeoutAt: ['time', v532],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v434, v435, v436, v451, v469, v470, v471, v479, v503, v504, v521, v522, v532],
                evt_cnt: 0,
                funcNum: 11,
                lct: v523,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v581, time: v580, didSend: v224, from: v579 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v451,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v581, time: v580, didSend: v224, from: v579 } = txn8;
              ;
              const v582 = stdlib.addressEq(v434, v579);
              const v583 = stdlib.addressEq(v451, v579);
              const v584 = v582 ? true : v583;
              stdlib.assert(v584, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:163:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:94:52:application',
                fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:93:28:function exp)', 'at ./index.rsh:163:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v537, v538, v539, v540], secs: v542, time: v541, didSend: v164, from: v536 } = txn7;
              ;
              const v543 = stdlib.addressEq(v434, v536);
              stdlib.assert(v543, {
                at: './index.rsh:161:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v544 = stdlib.digest([ctc0, ctc0], [v538, v537]);
              const v545 = stdlib.digestEq(v503, v544);
              stdlib.assert(v545, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:166:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v546 = stdlib.digest([ctc0, ctc0], [v540, v539]);
              const v547 = stdlib.digestEq(v504, v546);
              stdlib.assert(v547, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:167:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v548 = stdlib.eq(v539, v522);
              let v549;
              if (v548) {
                v549 = stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '1');
                }
              else {
                const v550 = stdlib.safeAdd(v537, v521);
                const v551 = stdlib.eq(v550, v539);
                let v552;
                if (v551) {
                  v552 = stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v554 = stdlib.eq(v550, v522);
                  const v555 = v554 ? stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '1');
                  v552 = v555;
                  }
                v549 = v552;
                }
              stdlib.protect(ctc1, await interact.roundWinner(v549), {
                at: './index.rsh:177:29:application',
                fs: ['at ./index.rsh:176:11:application call to [unknown function] (defined at: ./index.rsh:176:29:function exp)'],
                msg: 'roundWinner',
                who: 'Bob'
                });
              const v561 = stdlib.safeAdd(v537, v521);
              stdlib.protect(ctc1, await interact.seeWinning(v561), {
                at: './index.rsh:179:28:application',
                fs: ['at ./index.rsh:176:11:application call to [unknown function] (defined at: ./index.rsh:176:29:function exp)'],
                msg: 'seeWinning',
                who: 'Bob'
                });
              
              const v562 = stdlib.eq(v549, stdlib.checkedBigNumberify('./index.rsh:183:20:decimal', stdlib.UInt_max, '0'));
              let v563;
              if (v562) {
                const v564 = stdlib.safeAdd(v469, stdlib.checkedBigNumberify('./index.rsh:184:25:decimal', stdlib.UInt_max, '2'));
                const v565 = stdlib.safeAdd(v471, stdlib.checkedBigNumberify('./index.rsh:184:48:decimal', stdlib.UInt_max, '1'));
                const v566 = [v564, v470, v565];
                v563 = v566;
                }
              else {
                const v567 = stdlib.eq(v549, stdlib.checkedBigNumberify('./index.rsh:185:24:decimal', stdlib.UInt_max, '2'));
                let v568;
                if (v567) {
                  const v569 = stdlib.safeAdd(v470, stdlib.checkedBigNumberify('./index.rsh:186:37:decimal', stdlib.UInt_max, '2'));
                  const v570 = stdlib.safeAdd(v471, stdlib.checkedBigNumberify('./index.rsh:186:48:decimal', stdlib.UInt_max, '1'));
                  const v571 = [v469, v569, v570];
                  v568 = v571;
                  }
                else {
                  const v572 = stdlib.safeAdd(v469, stdlib.checkedBigNumberify('./index.rsh:187:25:decimal', stdlib.UInt_max, '1'));
                  const v573 = stdlib.safeAdd(v470, stdlib.checkedBigNumberify('./index.rsh:187:37:decimal', stdlib.UInt_max, '1'));
                  const v574 = stdlib.safeAdd(v471, stdlib.checkedBigNumberify('./index.rsh:187:48:decimal', stdlib.UInt_max, '1'));
                  const v575 = [v572, v573, v574];
                  v568 = v575;
                  }
                v563 = v568;
                }
              const v576 = v563[stdlib.checkedBigNumberify('./index.rsh:182:7:array', stdlib.UInt_max, '0')];
              const v577 = v563[stdlib.checkedBigNumberify('./index.rsh:182:7:array', stdlib.UInt_max, '1')];
              const v578 = v563[stdlib.checkedBigNumberify('./index.rsh:182:7:array', stdlib.UInt_max, '2')];
              const cv469 = v576;
              const cv470 = v577;
              const cv471 = v578;
              const cv472 = v541;
              const cv479 = v479;
              
              v469 = cv469;
              v470 = cv470;
              v471 = cv471;
              v472 = cv472;
              v479 = cv479;
              
              txn4 = txn7;
              continue;}
            
            }
          
          }
        
        }
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v630], secs: v632, time: v631, didSend: v315, from: v629 } = txn5;
      ;
      const v633 = stdlib.addressEq(v434, v629);
      stdlib.assert(v633, {
        at: './index.rsh:195:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v634 = stdlib.gt(v469, v470);
      const v635 = stdlib.gt(v470, v469);
      const v636 = v635 ? stdlib.checkedBigNumberify('./index.rsh:197:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:197:59:decimal', stdlib.UInt_max, '1');
      const v637 = v634 ? stdlib.checkedBigNumberify('./index.rsh:197:31:decimal', stdlib.UInt_max, '0') : v636;
      const cv456 = v637;
      const cv457 = v631;
      const cv464 = v479;
      
      v456 = cv456;
      v457 = cv457;
      v464 = cv464;
      
      txn3 = txn5;
      continue;
      
      }
    const v638 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:201:12:decimal', stdlib.UInt_max, '2'), v435);
    const v639 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v640 = v639 ? v434 : v451;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v456), {
      at: './index.rsh:205:24:application',
      fs: ['at ./index.rsh:204:7:application call to [unknown function] (defined at: ./index.rsh:204:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAVAAECCGggCygHCVBYYLABBsABEHAFMAMmAwEAAQEAIjUAMRhBBnsqZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQgMQAMcSSEJDEAB80mBCgxAAZhJIQYMQABXIQYSRCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AE49k2NbAyBjQDIQ9bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBFuyCCOyEDT/sgezQgWRSCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSklXACA1/yEKWzX+IQtbNf0hDFs1/IG4AVs1+0k1BUlKIls1+iVbNfkhEFs1+IEYWzX3gASDDgd4NPoWUDT5FlA0+BZQNPcWULAyBjQDIQ9bDEQ0/zEAEkQ0A1dwIDT5FjT6FlABEkQ0A1eQIDT3FjT4FlABEkQ0+DT7EkEABiM19EIAJTT6NAMhDVsISTXzNPgSQQAGIjXyQgAKIyQ08zT7Ek018jTyNfQ09CISQQAUNP4kCBY0/RZQNPwjCBZQNfNCADI09CQSQQAUNP4WNP0kCBZQNPwjCBZQNfJCABM0/iMIFjT9IwgWUDT8IwgWUDXyNPI18zT/NAMhBVs0AyEHWzQDVzAgNPMiWzTzJVs08yEQWzIGNAMhBFtCA9ZIIQk0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gASiBWaOsDIGNAMhDVsPRDT/MQASNANXMCAxABIRRLEisgE0AyEEW7III7IQNP+yB7NCBANJJQxAAMtIIQk0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKVwAgNf8hBVs1/iEHWzX9VzAgNfwhCls1+yELWzX6IQxbNfkhBFs1+FdwIDX3V5AgNfZJNQVJIls19SVbNfSABDUaKtA09RZQNPQWULAyBjQDIQ1bDEQ0/DEAEkQyBjT9CDXzNP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4FlA091A09lA09RZQNPQWUDTzFlAoSwFXAH9nKUsBV39JZ0ghBjUBMgY1AkIDTkghCDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABOIbs6mwMgY0AyERWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQRbsggjshA0/7IHs0IC4UkkDEABakkhEgxAASNJIQ4MQAC1SCEINAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8hBVs1/iEHWzX9VzAgNfwhCls1+yELWzX6IQxbNfkhBFs1+Ek1BUlXACA191cgIDX2gAQENDmeNPdQNPZQsDIGNAMhEVsMRDT/MQASRDIGNP0INfU0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQNPgWUDT3UDT2UDT1FlAoSwFXAH9nKUsBV385Z0ghCTUBMgY1AkICNEghDjQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEKWzX+IQtbNf1JNQU1/IAEUxE2uTT8ULA0/zEAEkQ0/zQDIQVbNAMhB1s0A1cwICMkNP00/g1NIjT+NP0NTTIGNAMhDFtCAO0kEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIRNbD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgFxSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASai5F0sDIGNAMhE1sMRDT/iAGpNANXACA0/zQDIQdbMQAjMgY0/0kIQgBfSIGgjQaIAYkiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAVkyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAOA1/zX+Nf01/DX7Nfo1+TT9IxJBABI0+TT6NPs0/CIiIjT+NP9CAByxIrIBJDT6C7III7IQNPw0+TT9IhJNsgezQgCBNf81/jX9Nfw1+zX6Nfk1+DX3NP0hFAxBADs0/jT5CDX2NPc0+BZQNPkWUDT6UDT7FlA0/BZQNP0WUDT/FlA09hZQKEsBVwB4Z0ghCDUBMgY1AkIASDT3NPgWUDT5FlA0+lA0+xZQNPwWUDT/FlAoSwFXAGhnSCEONQEyBjUCQgAcMRkhEhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEUMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 200,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v436",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v436",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v537",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v538",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v539",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v540",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v630",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v503",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v504",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v521",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v522",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v537",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v538",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v539",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v540",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v630",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v503",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v504",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v521",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v522",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002642380380620026428339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6122c5806200037d6000396000f3fe6080604052600436106100a55760003560e01c80638b9fadc8116100615780638b9fadc814610133578063ab53f2c614610146578063ad9fa3d814610169578063bf2c5b241461017c578063c6524acb1461018f578063de736998146101a257005b80631e93b0f1146100ae57806321642639146100d25780632c10a159146100e55780637eea518c146100f8578063832307571461010b5780638328d4c41461012057005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611bcb565b6101b5565b6100ac6100f3366004611c00565b610448565b6100ac610106366004611c00565b6105d7565b34801561011757600080fd5b506001546100bf565b6100ac61012e366004611bcb565b610755565b6100ac610141366004611c00565b6109e4565b34801561015257600080fd5b5061015b610b80565b6040516100c9929190611c1c565b6100ac610177366004611c00565b610c1d565b6100ac61018a366004611c00565b610ddb565b6100ac61019d366004611c79565b610f36565b6100ac6101b0366004611c00565b611341565b6101c560076000541460166114d9565b6101df813515806101d857506001548235145b60176114d9565b6000808055600280546101f190611c8b565b80601f016020809104026020016040519081016040528092919081815260200182805461021d90611c8b565b801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b50505050508060200190518101906102829190611d78565b905061029a6040518060200160405280600081525090565b6102ac826101000151431060186114d9565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102dd929190611e01565b60405180910390a16102f1341560146114d9565b8151610309906001600160a01b0316331460156114d9565b6103174383604001516114ff565b81600001818152505061038f60405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e0808601519084015285810135610100840152858201356101208401528351610140840152600960005543600155905161041d91839101611e32565b6040516020818303038152906040526002908051906020019061044192919061195b565b5050505050565b61045860016000541460096114d9565b6104728135158061046b57506001548235145b600a6114d9565b60008080556002805461048490611c8b565b80601f01602080910402602001604051908101604052809291908181526020018280546104b090611c8b565b80156104fd5780601f106104d2576101008083540402835291602001916104fd565b820191906000526020600020905b8154815290600101906020018083116104e057829003601f168201915b50505050508060200190518101906105159190611ec5565b905061052881606001514310600b6114d9565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610559929190611f4e565b60405180910390a16105728160200151341460086114d9565b61057a6119df565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525180016020820151604001526105d281611552565b505050565b6105e7600160005414600d6114d9565b610601813515806105fa57506001548235145b600e6114d9565b60008080556002805461061390611c8b565b80601f016020809104026020016040519081016040528092919081815260200182805461063f90611c8b565b801561068c5780601f106106615761010080835404028352916020019161068c565b820191906000526020600020905b81548152906001019060200180831161066f57829003601f168201915b50505050508060200190518101906106a49190611ec5565b90506106b88160600151431015600f6114d9565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106e9929190611f4e565b60405180910390a16106fd3415600c6114d9565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561073a573d6000803e3d6000fd5b506000808055600181905561075190600290611a20565b5050565b61076560096000541460206114d9565b61077f8135158061077857506001548235145b60216114d9565b60008080556002805461079190611c8b565b80601f01602080910402602001604051908101604052809291908181526020018280546107bd90611c8b565b801561080a5780601f106107df5761010080835404028352916020019161080a565b820191906000526020600020905b8154815290600101906020018083116107ed57829003601f168201915b50505050508060200190518101906108229190611f83565b905061083a6040518060200160405280600081525090565b61084c826101400151431060226114d9565b7f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e338460405161087d929190611e01565b60405180910390a16108913415601e6114d9565b60608201516108ac906001600160a01b03163314601f6114d9565b6108ba4383604001516114ff565b816000018181525050610940604051806101a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e080860151908401526101008086015190840152610120808601519084015285810135610140840152858201356101608401528351610180840152600b60005543600155905161041d91839101612024565b6109f4600b6000541460316114d9565b610a0e81351580610a0757506001548235145b60326114d9565b600080805560028054610a2090611c8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4c90611c8b565b8015610a995780601f10610a6e57610100808354040283529160200191610a99565b820191906000526020600020905b815481529060010190602001808311610a7c57829003601f168201915b5050505050806020019051810190610ab191906120cf565b9050610ac681610180015143101560336114d9565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503383604051610af7929190611f4e565b60405180910390a1610b0b3415602f6114d9565b8051610b3f906001600160a01b03163314610b355760608201516001600160a01b03163314610b38565b60015b60306114d9565b80606001516001600160a01b03166108fc8260e001519081150290604051600060405180830381858888f1935050505015801561073a573d6000803e3d6000fd5b600060606000546002808054610b9590611c8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc190611c8b565b8015610c0e5780601f10610be357610100808354040283529160200191610c0e565b820191906000526020600020905b815481529060010190602001808311610bf157829003601f168201915b50505050509050915091509091565b610c2d60066000541460126114d9565b610c4781351580610c4057506001548235145b60136114d9565b600080805560028054610c5990611c8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8590611c8b565b8015610cd25780601f10610ca757610100808354040283529160200191610cd2565b820191906000526020600020905b815481529060010190602001808311610cb557829003601f168201915b5050505050806020019051810190610cea9190612182565b90507f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213653383604051610d1d929190611f4e565b60405180910390a1610d31341560106114d9565b8051610d49906001600160a01b0316331460116114d9565b610d516119df565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260a0820151608083015111610db35781608001518260a0015111610dac576001610db6565b6002610db6565b60005b602080830180519290925281514391015260c08301519051604001526105d281611552565b610deb600760005414601b6114d9565b610e0581351580610dfe57506001548235145b601c6114d9565b600080805560028054610e1790611c8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4390611c8b565b8015610e905780601f10610e6557610100808354040283529160200191610e90565b820191906000526020600020905b815481529060010190602001808311610e7357829003601f168201915b5050505050806020019051810190610ea89190611d78565b9050610ebd816101000151431015601d6114d9565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610eee929190611f4e565b60405180910390a1610f02341560196114d9565b8051610b3f906001600160a01b03163314610f2c5760608201516001600160a01b03163314610f2f565b60015b601a6114d9565b610f46600b60005414602c6114d9565b610f6081351580610f5957506001548235145b602d6114d9565b600080805560028054610f7290611c8b565b80601f0160208091040260200160405190810160405280929190818152602001828054610f9e90611c8b565b8015610feb5780601f10610fc057610100808354040283529160200191610feb565b820191906000526020600020905b815481529060010190602001808311610fce57829003601f168201915b505050505080602001905181019061100391906120cf565b905061100d611a5a565b61101f8261018001514310602e6114d9565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fdb9ff2b40f343678ee44b2c47534959c4772eba0faec02287a146c07d5288e739060c00160405180910390a1611092341560286114d9565b81516110aa906001600160a01b0316331460296114d9565b604080516110f8916110d19190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c83610100015114602a6114d9565b60408051608085013560208083019190915260608087013583850152835180840385018152920190925280519101206101208301516111399114602b6114d9565b6101608201516060840135141561115357600181526111af565b61116983602001600001358361014001516114ff565b602082018190526060840135141561118757600060408201526111a7565b81610160015181602001511461119e5760016111a1565b60025b60408201525b604081015181525b8051611201576111c4826080015160026114ff565b6080820180519190915260a083015190516020015260c08201516111e99060016114ff565b608082018051604001919091525160608201526112b7565b80516002141561125a57608082015160c08201515260a08201516112269060026114ff565b8160c0015160200181815250506112428260c0015160016114ff565b60c082018051604001919091525160a08201526112ac565b611269826080015160016114ff565b60e08201515260a082015161127f9060016114ff565b60e08201516020015260c08201516112989060016114ff565b60e082018051604001919091525160a08201525b60a081015160608201525b6112bf611b1a565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169381019390935284830180515183860180519190915281518401518151909401939093525181015182519091015280514392019190915260e084015190516080015261133b8161165e565b50505050565b61135160096000541460256114d9565b61136b8135158061136457506001548235145b60266114d9565b60008080556002805461137d90611c8b565b80601f01602080910402602001604051908101604052809291908181526020018280546113a990611c8b565b80156113f65780601f106113cb576101008083540402835291602001916113f6565b820191906000526020600020905b8154815290600101906020018083116113d957829003601f168201915b505050505080602001905181019061140e9190611f83565b905061142381610140015143101560276114d9565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611454929190611f4e565b60405180910390a1611468341560236114d9565b805161149c906001600160a01b031633146114925760608201516001600160a01b03163314611495565b60015b60246114d9565b805160e08201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561073a573d6000803e3d6000fd5b816107515760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261150c8382612236565b915081101561154c5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016114f6565b92915050565b602081015151600114156115e357611568611b1a565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451820152845160609081015185519416938101939093528184018051600090819052815184018190528151830152828601805190930151815190940193909352905101519051608001526107518161165e565b602081015151156115f9578051606001516115fd565b8051515b6001600160a01b03166108fc61161c60028460000151602001516118fc565b6040518115909202916000818181858888f19350505050158015611644573d6000803e3d6000fd5b506000808055600181905561165b90600290611a20565b50565b604080516020810190915260008152600382602001516040015110156117f4576116988260200151606001518360000151604001516114ff565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091528251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252808501805151608080860191909152815183015160a0860152815184015160c08601529051015160e0840152835161010084015260076000554360015590516117d09183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b6040516020818303038152906040526002908051906020019061133b92919061195b565b6118466040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b018051516080808c01918252825189015160a0808e01918252935182015160c0808f0191825260066000554360015589519b8c019c909c529851978a01979097529451938801939093529051909716918501919091525194830194909452925191810191909152905160e0820152610100016117d0565b600081158061192057508282611912818361224e565b925061191e908361226d565b145b61154c5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016114f6565b82805461196790611c8b565b90600052602060002090601f01602090048101928261198957600085556119cf565b82601f106119a257805160ff19168380011785556119cf565b828001600101855582156119cf579182015b828111156119cf5782518255916020019190600101906119b4565b506119db929150611b64565b5090565b60405180604001604052806119f2611b79565b8152602001611a1b60405180606001604052806000815260200160008152602001600081525090565b905290565b508054611a2c90611c8b565b6000825580601f10611a3c575050565b601f01602090049060005260206000209081019061165b9190611b64565b604051806101000160405280600081526020016000815260200160008152602001611a9f60405180606001604052806000815260200160008152602001600081525090565b8152602001611ac860405180606001604052806000815260200160008152602001600081525090565b8152602001611af160405180606001604052806000815260200160008152602001600081525090565b81526020016119f260405180606001604052806000815260200160008152602001600081525090565b6040518060400160405280611b2d611b79565b8152602001611a1b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b5b808211156119db5760008155600101611b65565b604051806080016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b600060608284031215611bc557600080fd5b50919050565b600060608284031215611bdd57600080fd5b611be78383611bb3565b9392505050565b600060408284031215611bc557600080fd5b600060408284031215611c1257600080fd5b611be78383611bee565b82815260006020604081840152835180604085015260005b81811015611c5057858101830151858201606001528201611c34565b81811115611c62576000606083870101525b50601f01601f191692909201606001949350505050565b600060a08284031215611bc557600080fd5b600181811c90821680611c9f57607f821691505b60208210811415611bc557634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff81118282101715611cf257634e487b7160e01b600052604160045260246000fd5b60405290565b604051610160810167ffffffffffffffff81118282101715611cf257634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715611cf257634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611d7357600080fd5b919050565b60006101208284031215611d8b57600080fd5b611d93611cc0565b611d9c83611d5c565b81526020830151602082015260408301516040820152611dbe60608401611d5c565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6001600160a01b038316815260808101611be760208301848035825260208082013590830152604090810135910152565b81516001600160a01b03168152610160810160208301516020830152604083015160408301526060830151611e7260608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525092915050565b600060808284031215611ed757600080fd5b6040516080810181811067ffffffffffffffff82111715611f0857634e487b7160e01b600052604160045260246000fd5b604052611f1483611d5c565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b80358015158114611d7357600080fd5b6001600160a01b038316815281356020808301919091526060820190611f75908401611f3e565b151560408301529392505050565b60006101608284031215611f9657600080fd5b611f9e611cf8565b611fa783611d5c565b81526020830151602082015260408301516040820152611fc960608401611d5c565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152508091505092915050565b81516001600160a01b031681526101a081016020830151602083015260408301516040830152606083015161206460608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151818401525061018080840151818401525092915050565b60006101a082840312156120e257600080fd5b6120ea611d2a565b6120f383611d5c565b8152602083015160208201526040830151604082015261211560608401611d5c565b60608201526080838101519082015260a0808401519082015260c0808401519082015260e080840151908201526101008084015190820152610120808401519082015261014080840151908201526101608084015190820152610180928301519281019290925250919050565b600060e0828403121561219457600080fd5b60405160e0810181811067ffffffffffffffff821117156121c557634e487b7160e01b600052604160045260246000fd5b6040526121d183611d5c565b815260208301516020820152604083015160408201526121f360608401611d5c565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561224957612249612220565b500190565b600081600019048311821515161561226857612268612220565b500290565b60008261228a57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220a753aa5b31cf9a47c685b7c05a6970fa7cc72c73473629df9640a17ba64384d664736f6c634300080c0033`,
  BytecodeLen: 9794,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:102:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:108:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:208:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:194:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:117:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:136:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:139:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:147:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:150:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:163:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
