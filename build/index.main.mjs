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
  
  
  const v426 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v427 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v427, v426],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:100:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v427, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v431, v432], secs: v434, time: v433, didSend: v95, from: v430 } = txn1;
      
      sim_r.txns.push({
        amt: v431,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v443 = stdlib.safeAdd(v433, v432);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v431, v432], secs: v434, time: v433, didSend: v95, from: v430 } = txn1;
  ;
  const v443 = stdlib.safeAdd(v433, v432);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v443],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v430, v431, v432, v443],
      evt_cnt: 0,
      funcNum: 2,
      lct: v433,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v644, time: v643, didSend: v345, from: v642 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v430,
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
    const {data: [], secs: v644, time: v643, didSend: v345, from: v642 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:93:52:application',
      fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:92:28:function exp)', 'at ./index.rsh:107:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v449, time: v448, didSend: v104, from: v447 } = txn2;
    const v451 = stdlib.add(v431, v431);
    ;
    let v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v453 = v448;
    let v460 = v451;
    
    let txn3 = txn2;
    while (await (async () => {
      const v464 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v464;})()) {
      let v465 = stdlib.checkedBigNumberify('./index.rsh:113:41:decimal', stdlib.UInt_max, '0');
      let v466 = stdlib.checkedBigNumberify('./index.rsh:113:44:decimal', stdlib.UInt_max, '0');
      let v467 = stdlib.checkedBigNumberify('./index.rsh:113:38:decimal', stdlib.UInt_max, '0');
      let v468 = v453;
      let v475 = v460;
      
      let txn4 = txn3;
      while (await (async () => {
        const v479 = stdlib.lt(v467, stdlib.checkedBigNumberify('./index.rsh:115:20:decimal', stdlib.UInt_max, '3'));
        
        return v479;})()) {
        const v486 = stdlib.safeAdd(v468, v432);
        const v490 = stdlib.protect(ctc0, await interact.pickFinger(), {
          at: './index.rsh:119:49:application',
          fs: ['at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:21:function exp)'],
          msg: 'pickFinger',
          who: 'Alice'
          });
        const v491 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:64:31:application',
          fs: ['at ./index.rsh:120:70:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:21:function exp)'],
          msg: 'random',
          who: 'Alice'
          });
        const v492 = stdlib.digest([ctc0, ctc0], [v491, v490]);
        const v494 = stdlib.protect(ctc0, await interact.guessResult(), {
          at: './index.rsh:126:55:application',
          fs: ['at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:21:function exp)'],
          msg: 'guessResult',
          who: 'Alice'
          });
        const v495 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:64:31:application',
          fs: ['at ./index.rsh:127:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:118:17:application call to [unknown function] (defined at: ./index.rsh:118:21:function exp)'],
          msg: 'random',
          who: 'Alice'
          });
        const v496 = stdlib.digest([ctc0, ctc0], [v495, v494]);
        
        const txn5 = await (ctc.sendrecv({
          args: [v430, v431, v432, v447, v465, v466, v467, v475, v486, v492, v496],
          evt_cnt: 2,
          funcNum: 6,
          lct: v468,
          onlyIf: true,
          out_tys: [ctc1, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:133:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v499, v500], secs: v502, time: v501, didSend: v140, from: v498 } = txn5;
            
            ;
            const v510 = stdlib.safeAdd(v501, v432);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v486],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v430, v431, v432, v447, v465, v466, v467, v475, v486],
            evt_cnt: 0,
            funcNum: 7,
            lct: v468,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v604, time: v603, didSend: v288, from: v602 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v447,
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
          const {data: [], secs: v604, time: v603, didSend: v288, from: v602 } = txn6;
          ;
          const v605 = stdlib.addressEq(v430, v602);
          const v606 = stdlib.addressEq(v447, v602);
          const v607 = v605 ? true : v606;
          stdlib.assert(v607, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:135:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:93:52:application',
            fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:92:28:function exp)', 'at ./index.rsh:135:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v499, v500], secs: v502, time: v501, didSend: v140, from: v498 } = txn5;
          ;
          const v503 = stdlib.addressEq(v430, v498);
          stdlib.assert(v503, {
            at: './index.rsh:133:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v510 = stdlib.safeAdd(v501, v432);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v510],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v430, v431, v432, v447, v465, v466, v467, v475, v499, v500, v510],
              evt_cnt: 0,
              funcNum: 9,
              lct: v501,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v588, time: v587, didSend: v254, from: v586 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v430,
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
            const {data: [], secs: v588, time: v587, didSend: v254, from: v586 } = txn7;
            ;
            const v589 = stdlib.addressEq(v430, v586);
            const v590 = stdlib.addressEq(v447, v586);
            const v591 = v589 ? true : v590;
            stdlib.assert(v591, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:146:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:93:52:application',
              fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:92:28:function exp)', 'at ./index.rsh:146:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v517, v518], secs: v520, time: v519, didSend: v152, from: v516 } = txn6;
            ;
            const v521 = stdlib.addressEq(v447, v516);
            stdlib.assert(v521, {
              at: './index.rsh:144:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v528 = stdlib.safeAdd(v519, v432);
            const txn7 = await (ctc.sendrecv({
              args: [v430, v431, v432, v447, v465, v466, v467, v475, v499, v500, v517, v518, v528, v490, v491, v494, v495],
              evt_cnt: 4,
              funcNum: 10,
              lct: v519,
              onlyIf: true,
              out_tys: [ctc0, ctc0, ctc0, ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:160:13:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v533, v534, v535, v536], secs: v538, time: v537, didSend: v164, from: v532 } = txn7;
                
                ;
                const v544 = stdlib.eq(v535, v518);
                let v545;
                if (v544) {
                  v545 = stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  const v546 = stdlib.safeAdd(v533, v517);
                  const v547 = stdlib.eq(v546, v535);
                  let v548;
                  if (v547) {
                    v548 = stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0');
                    }
                  else {
                    const v550 = stdlib.eq(v546, v518);
                    const v551 = v550 ? stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '1');
                    v548 = v551;
                    }
                  v545 = v548;
                  }
                
                const v553 = stdlib.eq(v545, stdlib.checkedBigNumberify('./index.rsh:178:20:decimal', stdlib.UInt_max, '0'));
                let v554;
                if (v553) {
                  const v555 = stdlib.safeAdd(v465, stdlib.checkedBigNumberify('./index.rsh:179:25:decimal', stdlib.UInt_max, '2'));
                  const v556 = stdlib.safeAdd(v467, stdlib.checkedBigNumberify('./index.rsh:179:48:decimal', stdlib.UInt_max, '1'));
                  const v557 = [v555, v466, v556];
                  v554 = v557;
                  }
                else {
                  const v563 = stdlib.safeAdd(v465, stdlib.checkedBigNumberify('./index.rsh:182:25:decimal', stdlib.UInt_max, '1'));
                  const v564 = stdlib.safeAdd(v466, stdlib.checkedBigNumberify('./index.rsh:182:37:decimal', stdlib.UInt_max, '1'));
                  const v565 = stdlib.safeAdd(v467, stdlib.checkedBigNumberify('./index.rsh:182:48:decimal', stdlib.UInt_max, '1'));
                  const v566 = [v563, v564, v565];
                  v554 = v566;
                  }
                const v567 = v554[stdlib.checkedBigNumberify('./index.rsh:177:7:array', stdlib.UInt_max, '0')];
                const v568 = v554[stdlib.checkedBigNumberify('./index.rsh:177:7:array', stdlib.UInt_max, '1')];
                const v569 = v554[stdlib.checkedBigNumberify('./index.rsh:177:7:array', stdlib.UInt_max, '2')];
                const cv465 = v567;
                const cv466 = v568;
                const cv467 = v569;
                const cv468 = v537;
                const cv475 = v475;
                
                await (async () => {
                  const v465 = cv465;
                  const v466 = cv466;
                  const v467 = cv467;
                  const v468 = cv468;
                  const v475 = cv475;
                  
                  if (await (async () => {
                    const v479 = stdlib.lt(v467, stdlib.checkedBigNumberify('./index.rsh:115:20:decimal', stdlib.UInt_max, '3'));
                    
                    return v479;})()) {
                    const v486 = stdlib.safeAdd(v468, v432);
                    sim_r.isHalt = false;
                    }
                  else {
                    
                    sim_r.isHalt = false;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v528],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v430, v431, v432, v447, v465, v466, v467, v475, v499, v500, v517, v518, v528],
                evt_cnt: 0,
                funcNum: 11,
                lct: v519,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v572, time: v571, didSend: v220, from: v570 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v447,
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
              const {data: [], secs: v572, time: v571, didSend: v220, from: v570 } = txn8;
              ;
              const v573 = stdlib.addressEq(v430, v570);
              const v574 = stdlib.addressEq(v447, v570);
              const v575 = v573 ? true : v574;
              stdlib.assert(v575, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:162:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:93:52:application',
                fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:92:28:function exp)', 'at ./index.rsh:162:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v533, v534, v535, v536], secs: v538, time: v537, didSend: v164, from: v532 } = txn7;
              ;
              const v539 = stdlib.addressEq(v430, v532);
              stdlib.assert(v539, {
                at: './index.rsh:160:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v540 = stdlib.digest([ctc0, ctc0], [v534, v533]);
              const v541 = stdlib.digestEq(v499, v540);
              stdlib.assert(v541, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:165:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v542 = stdlib.digest([ctc0, ctc0], [v536, v535]);
              const v543 = stdlib.digestEq(v500, v542);
              stdlib.assert(v543, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:166:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v544 = stdlib.eq(v535, v518);
              let v545;
              if (v544) {
                v545 = stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '1');
                }
              else {
                const v546 = stdlib.safeAdd(v533, v517);
                const v547 = stdlib.eq(v546, v535);
                let v548;
                if (v547) {
                  v548 = stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v550 = stdlib.eq(v546, v518);
                  const v551 = v550 ? stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '1');
                  v548 = v551;
                  }
                v545 = v548;
                }
              stdlib.protect(ctc2, await interact.roundWinner(v545), {
                at: './index.rsh:175:33:application',
                fs: ['at ./index.rsh:175:33:application call to [unknown function] (defined at: ./index.rsh:175:33:function exp)', 'at ./index.rsh:175:33:application call to "liftedInteract" (defined at: ./index.rsh:175:33:application)'],
                msg: 'roundWinner',
                who: 'Alice'
                });
              
              const v553 = stdlib.eq(v545, stdlib.checkedBigNumberify('./index.rsh:178:20:decimal', stdlib.UInt_max, '0'));
              let v554;
              if (v553) {
                const v555 = stdlib.safeAdd(v465, stdlib.checkedBigNumberify('./index.rsh:179:25:decimal', stdlib.UInt_max, '2'));
                const v556 = stdlib.safeAdd(v467, stdlib.checkedBigNumberify('./index.rsh:179:48:decimal', stdlib.UInt_max, '1'));
                const v557 = [v555, v466, v556];
                v554 = v557;
                }
              else {
                const v563 = stdlib.safeAdd(v465, stdlib.checkedBigNumberify('./index.rsh:182:25:decimal', stdlib.UInt_max, '1'));
                const v564 = stdlib.safeAdd(v466, stdlib.checkedBigNumberify('./index.rsh:182:37:decimal', stdlib.UInt_max, '1'));
                const v565 = stdlib.safeAdd(v467, stdlib.checkedBigNumberify('./index.rsh:182:48:decimal', stdlib.UInt_max, '1'));
                const v566 = [v563, v564, v565];
                v554 = v566;
                }
              const v567 = v554[stdlib.checkedBigNumberify('./index.rsh:177:7:array', stdlib.UInt_max, '0')];
              const v568 = v554[stdlib.checkedBigNumberify('./index.rsh:177:7:array', stdlib.UInt_max, '1')];
              const v569 = v554[stdlib.checkedBigNumberify('./index.rsh:177:7:array', stdlib.UInt_max, '2')];
              const cv465 = v567;
              const cv466 = v568;
              const cv467 = v569;
              const cv468 = v537;
              const cv475 = v475;
              
              v465 = cv465;
              v466 = cv466;
              v467 = cv467;
              v468 = cv468;
              v475 = cv475;
              
              txn4 = txn7;
              continue;}
            
            }
          
          }
        
        }
      stdlib.protect(ctc2, await interact.endGame(), {
        at: './index.rsh:187:50:application',
        fs: ['at ./index.rsh:186:15:application call to [unknown function] (defined at: ./index.rsh:186:19:function exp)'],
        msg: 'endGame',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v430, v431, v432, v447, v465, v466, v475, null],
        evt_cnt: 1,
        funcNum: 5,
        lct: v468,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:190:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v621], secs: v623, time: v622, didSend: v311, from: v620 } = txn5;
          
          ;
          const v625 = stdlib.gt(v465, v466);
          const v626 = stdlib.gt(v466, v465);
          const v627 = v626 ? stdlib.checkedBigNumberify('./index.rsh:192:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:192:59:decimal', stdlib.UInt_max, '1');
          const v628 = v625 ? stdlib.checkedBigNumberify('./index.rsh:192:31:decimal', stdlib.UInt_max, '0') : v627;
          const cv452 = v628;
          const cv453 = v622;
          const cv460 = v475;
          
          await (async () => {
            const v452 = cv452;
            const v453 = cv453;
            const v460 = cv460;
            
            if (await (async () => {
              const v464 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              
              return v464;})()) {
              const v465 = stdlib.checkedBigNumberify('./index.rsh:113:41:decimal', stdlib.UInt_max, '0');
              const v466 = stdlib.checkedBigNumberify('./index.rsh:113:44:decimal', stdlib.UInt_max, '0');
              const v467 = stdlib.checkedBigNumberify('./index.rsh:113:38:decimal', stdlib.UInt_max, '0');
              const v468 = v453;
              const v475 = v460;
              
              if (await (async () => {
                const v479 = stdlib.lt(v467, stdlib.checkedBigNumberify('./index.rsh:115:20:decimal', stdlib.UInt_max, '3'));
                
                return v479;})()) {
                const v486 = stdlib.safeAdd(v468, v432);
                sim_r.isHalt = false;
                }
              else {
                
                sim_r.isHalt = false;
                }}
            else {
              const v629 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:196:12:decimal', stdlib.UInt_max, '2'), v431);
              const v630 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v631 = v630 ? v430 : v447;
              sim_r.txns.push({
                kind: 'from',
                to: v631,
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
      const {data: [v621], secs: v623, time: v622, didSend: v311, from: v620 } = txn5;
      ;
      const v624 = stdlib.addressEq(v430, v620);
      stdlib.assert(v624, {
        at: './index.rsh:190:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v625 = stdlib.gt(v465, v466);
      const v626 = stdlib.gt(v466, v465);
      const v627 = v626 ? stdlib.checkedBigNumberify('./index.rsh:192:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:192:59:decimal', stdlib.UInt_max, '1');
      const v628 = v625 ? stdlib.checkedBigNumberify('./index.rsh:192:31:decimal', stdlib.UInt_max, '0') : v627;
      const cv452 = v628;
      const cv453 = v622;
      const cv460 = v475;
      
      v452 = cv452;
      v453 = cv453;
      v460 = cv460;
      
      txn3 = txn5;
      continue;
      
      }
    const v629 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:196:12:decimal', stdlib.UInt_max, '2'), v431);
    const v630 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v631 = v630 ? v430 : v447;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v452), {
      at: './index.rsh:200:24:application',
      fs: ['at ./index.rsh:199:7:application call to [unknown function] (defined at: ./index.rsh:199:25:function exp)'],
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
  const {data: [v431, v432], secs: v434, time: v433, didSend: v95, from: v430 } = txn1;
  ;
  const v443 = stdlib.safeAdd(v433, v432);
  stdlib.protect(ctc1, await interact.acceptWager(v431), {
    at: './index.rsh:104:25:application',
    fs: ['at ./index.rsh:103:11:application call to [unknown function] (defined at: ./index.rsh:103:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v430, v431, v432, v443],
    evt_cnt: 0,
    funcNum: 1,
    lct: v433,
    onlyIf: true,
    out_tys: [],
    pay: [v431, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v449, time: v448, didSend: v104, from: v447 } = txn2;
      
      const v451 = stdlib.add(v431, v431);
      sim_r.txns.push({
        amt: v431,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v453 = v448;
      const v460 = v451;
      
      if (await (async () => {
        const v464 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v464;})()) {
        const v465 = stdlib.checkedBigNumberify('./index.rsh:113:41:decimal', stdlib.UInt_max, '0');
        const v466 = stdlib.checkedBigNumberify('./index.rsh:113:44:decimal', stdlib.UInt_max, '0');
        const v467 = stdlib.checkedBigNumberify('./index.rsh:113:38:decimal', stdlib.UInt_max, '0');
        const v468 = v453;
        const v475 = v460;
        
        if (await (async () => {
          const v479 = stdlib.lt(v467, stdlib.checkedBigNumberify('./index.rsh:115:20:decimal', stdlib.UInt_max, '3'));
          
          return v479;})()) {
          const v486 = stdlib.safeAdd(v468, v432);
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        const v629 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:196:12:decimal', stdlib.UInt_max, '2'), v431);
        const v630 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v631 = v630 ? v430 : v447;
        sim_r.txns.push({
          kind: 'from',
          to: v631,
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
    timeoutAt: ['time', v443],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v430, v431, v432, v443],
      evt_cnt: 0,
      funcNum: 2,
      lct: v433,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v644, time: v643, didSend: v345, from: v642 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v430,
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
    const {data: [], secs: v644, time: v643, didSend: v345, from: v642 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:93:52:application',
      fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:92:28:function exp)', 'at ./index.rsh:107:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v449, time: v448, didSend: v104, from: v447 } = txn2;
    const v451 = stdlib.add(v431, v431);
    ;
    let v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v453 = v448;
    let v460 = v451;
    
    let txn3 = txn2;
    while (await (async () => {
      const v464 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v464;})()) {
      let v465 = stdlib.checkedBigNumberify('./index.rsh:113:41:decimal', stdlib.UInt_max, '0');
      let v466 = stdlib.checkedBigNumberify('./index.rsh:113:44:decimal', stdlib.UInt_max, '0');
      let v467 = stdlib.checkedBigNumberify('./index.rsh:113:38:decimal', stdlib.UInt_max, '0');
      let v468 = v453;
      let v475 = v460;
      
      let txn4 = txn3;
      while (await (async () => {
        const v479 = stdlib.lt(v467, stdlib.checkedBigNumberify('./index.rsh:115:20:decimal', stdlib.UInt_max, '3'));
        
        return v479;})()) {
        const v486 = stdlib.safeAdd(v468, v432);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc2, ctc2],
          timeoutAt: ['time', v486],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v430, v431, v432, v447, v465, v466, v467, v475, v486],
            evt_cnt: 0,
            funcNum: 7,
            lct: v468,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v604, time: v603, didSend: v288, from: v602 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v447,
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
          const {data: [], secs: v604, time: v603, didSend: v288, from: v602 } = txn6;
          ;
          const v605 = stdlib.addressEq(v430, v602);
          const v606 = stdlib.addressEq(v447, v602);
          const v607 = v605 ? true : v606;
          stdlib.assert(v607, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:135:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:93:52:application',
            fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:92:28:function exp)', 'at ./index.rsh:135:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v499, v500], secs: v502, time: v501, didSend: v140, from: v498 } = txn5;
          ;
          const v503 = stdlib.addressEq(v430, v498);
          stdlib.assert(v503, {
            at: './index.rsh:133:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v510 = stdlib.safeAdd(v501, v432);
          const v514 = stdlib.protect(ctc0, await interact.pickFinger(), {
            at: './index.rsh:141:57:application',
            fs: ['at ./index.rsh:140:15:application call to [unknown function] (defined at: ./index.rsh:140:19:function exp)'],
            msg: 'pickFinger',
            who: 'Bob'
            });
          const v515 = stdlib.protect(ctc0, await interact.guessResult(), {
            at: './index.rsh:142:63:application',
            fs: ['at ./index.rsh:140:15:application call to [unknown function] (defined at: ./index.rsh:140:19:function exp)'],
            msg: 'guessResult',
            who: 'Bob'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v430, v431, v432, v447, v465, v466, v467, v475, v499, v500, v510, v514, v515],
            evt_cnt: 2,
            funcNum: 8,
            lct: v501,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:144:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v517, v518], secs: v520, time: v519, didSend: v152, from: v516 } = txn6;
              
              ;
              const v528 = stdlib.safeAdd(v519, v432);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v510],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v430, v431, v432, v447, v465, v466, v467, v475, v499, v500, v510],
              evt_cnt: 0,
              funcNum: 9,
              lct: v501,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v588, time: v587, didSend: v254, from: v586 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v430,
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
            const {data: [], secs: v588, time: v587, didSend: v254, from: v586 } = txn7;
            ;
            const v589 = stdlib.addressEq(v430, v586);
            const v590 = stdlib.addressEq(v447, v586);
            const v591 = v589 ? true : v590;
            stdlib.assert(v591, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:146:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:93:52:application',
              fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:92:28:function exp)', 'at ./index.rsh:146:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v517, v518], secs: v520, time: v519, didSend: v152, from: v516 } = txn6;
            ;
            const v521 = stdlib.addressEq(v447, v516);
            stdlib.assert(v521, {
              at: './index.rsh:144:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v528 = stdlib.safeAdd(v519, v432);
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 4,
              funcNum: 10,
              out_tys: [ctc0, ctc0, ctc0, ctc0],
              timeoutAt: ['time', v528],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v430, v431, v432, v447, v465, v466, v467, v475, v499, v500, v517, v518, v528],
                evt_cnt: 0,
                funcNum: 11,
                lct: v519,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v572, time: v571, didSend: v220, from: v570 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v447,
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
              const {data: [], secs: v572, time: v571, didSend: v220, from: v570 } = txn8;
              ;
              const v573 = stdlib.addressEq(v430, v570);
              const v574 = stdlib.addressEq(v447, v570);
              const v575 = v573 ? true : v574;
              stdlib.assert(v575, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:162:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:93:52:application',
                fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:92:28:function exp)', 'at ./index.rsh:162:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v533, v534, v535, v536], secs: v538, time: v537, didSend: v164, from: v532 } = txn7;
              ;
              const v539 = stdlib.addressEq(v430, v532);
              stdlib.assert(v539, {
                at: './index.rsh:160:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v540 = stdlib.digest([ctc0, ctc0], [v534, v533]);
              const v541 = stdlib.digestEq(v499, v540);
              stdlib.assert(v541, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:165:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v542 = stdlib.digest([ctc0, ctc0], [v536, v535]);
              const v543 = stdlib.digestEq(v500, v542);
              stdlib.assert(v543, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:166:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v544 = stdlib.eq(v535, v518);
              let v545;
              if (v544) {
                v545 = stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '1');
                }
              else {
                const v546 = stdlib.safeAdd(v533, v517);
                const v547 = stdlib.eq(v546, v535);
                let v548;
                if (v547) {
                  v548 = stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v550 = stdlib.eq(v546, v518);
                  const v551 = v550 ? stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '1');
                  v548 = v551;
                  }
                v545 = v548;
                }
              const v553 = stdlib.eq(v545, stdlib.checkedBigNumberify('./index.rsh:178:20:decimal', stdlib.UInt_max, '0'));
              let v554;
              if (v553) {
                const v555 = stdlib.safeAdd(v465, stdlib.checkedBigNumberify('./index.rsh:179:25:decimal', stdlib.UInt_max, '2'));
                const v556 = stdlib.safeAdd(v467, stdlib.checkedBigNumberify('./index.rsh:179:48:decimal', stdlib.UInt_max, '1'));
                const v557 = [v555, v466, v556];
                v554 = v557;
                }
              else {
                const v563 = stdlib.safeAdd(v465, stdlib.checkedBigNumberify('./index.rsh:182:25:decimal', stdlib.UInt_max, '1'));
                const v564 = stdlib.safeAdd(v466, stdlib.checkedBigNumberify('./index.rsh:182:37:decimal', stdlib.UInt_max, '1'));
                const v565 = stdlib.safeAdd(v467, stdlib.checkedBigNumberify('./index.rsh:182:48:decimal', stdlib.UInt_max, '1'));
                const v566 = [v563, v564, v565];
                v554 = v566;
                }
              const v567 = v554[stdlib.checkedBigNumberify('./index.rsh:177:7:array', stdlib.UInt_max, '0')];
              const v568 = v554[stdlib.checkedBigNumberify('./index.rsh:177:7:array', stdlib.UInt_max, '1')];
              const v569 = v554[stdlib.checkedBigNumberify('./index.rsh:177:7:array', stdlib.UInt_max, '2')];
              const cv465 = v567;
              const cv466 = v568;
              const cv467 = v569;
              const cv468 = v537;
              const cv475 = v475;
              
              v465 = cv465;
              v466 = cv466;
              v467 = cv467;
              v468 = cv468;
              v475 = cv475;
              
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
      const {data: [v621], secs: v623, time: v622, didSend: v311, from: v620 } = txn5;
      ;
      const v624 = stdlib.addressEq(v430, v620);
      stdlib.assert(v624, {
        at: './index.rsh:190:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v625 = stdlib.gt(v465, v466);
      const v626 = stdlib.gt(v466, v465);
      const v627 = v626 ? stdlib.checkedBigNumberify('./index.rsh:192:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:192:59:decimal', stdlib.UInt_max, '1');
      const v628 = v625 ? stdlib.checkedBigNumberify('./index.rsh:192:31:decimal', stdlib.UInt_max, '0') : v627;
      const cv452 = v628;
      const cv453 = v622;
      const cv460 = v475;
      
      v452 = cv452;
      v453 = cv453;
      v460 = cv460;
      
      txn3 = txn5;
      continue;
      
      }
    const v629 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:196:12:decimal', stdlib.UInt_max, '2'), v431);
    const v630 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v631 = v630 ? v430 : v447;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v452), {
      at: './index.rsh:200:24:application',
      fs: ['at ./index.rsh:199:7:application call to [unknown function] (defined at: ./index.rsh:199:25:function exp)'],
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
  appApproval: `ByAVAAEIaAIgCygHCVBYYLABBsABEHAFMAMmAwEAAQEAIjUAMRhBBlwqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQgMQAL6SSEJDEAB00mBCgxAAXlJIQYMQABWIQYSRCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AE49k2NbAyBjQDIQ9bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCBXNIIQY0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSVcAIDX/IQpbNf4hC1s1/SEMWzX8gbgBWzX7STUFSUoiWzX6JFs1+SEQWzX4gRhbNfeABIMOB3g0+hZQNPkWUDT4FlA09xZQsDIGNAMhD1sMRDT/MQASRDQDV3AgNPkWNPoWUAESRDQDV5AgNPcWNPgWUAESRDT4NPsSQQAGIzX1QgAmNPo0AyENWwhJNfQ0+BJBAAYiNfNCAAsjIQQ09DT7Ek018zTzNfU09SISQQAVNP4hBAgWNP0WUDT8IwgWUDX0QgATNP4jCBY0/SMIFlA0/CMIFlA19DT/NAMhBVs0AyEHWzQDVzAgNPQiWzT0JFs09CEQWzIGNAMlW0ID1kghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKIFZo6wMgY0AyENWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgQESSQMQADKSCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSlcAIDX/IQVbNf4hB1s1/VcwIDX8IQpbNfshC1s1+iEMWzX5JVs1+FdwIDX3V5AgNfZJNQVJIls19SRbNfSABDUaKtA09RZQNPQWULAyBjQDIQ1bDEQ0/DEAEkQyBjT9CDXzNP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4FlA091A09lA09RZQNPQWUDTzFlAoSwFXAH9nKUsBV39JZ0ghBjUBMgY1AkIDUEghCDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABOIbs6mwMgY0AyERWw9ENANXACAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgLkSSEEDEABa0khEgxAASNJIQ4MQAC0SCEINAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8hBVs1/iEHWzX9VzAgNfwhCls1+yELWzX6IQxbNfklWzX4STUFSVcAIDX3VyAgNfaABAQ0OZ4091A09lCwMgY0AyERWwxENP8xABJEMgY0/Qg19TT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlA0+BZQNPdQNPZQNPUWUChLAVcAf2cpSwFXfzlnSCEJNQEyBjUCQgI3SCEONAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQpbNf4hC1s1/Uk1BTX8gARTETa5NPxQsDT/MQASRDT/NAMhBVs0AyEHWzQDVzAgIyEENP00/g1NIjT+NP0NTTIGNAMhDFtCAO4hBBJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyETWw9EsSKyATQDIQVbsggjshA0A1cAILIHs0IBckkjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/4AEmouRdLAyBjQDIRNbDEQ0/4gBqjQDVwAgNP80AyEHWzEAIzIGNP9JCEIAX0iBoI0GiAGKIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDT/iAFaMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgDhNf81/jX9Nfw1+zX6Nfk0/SMSQQASNPk0+jT7NPwiIiI0/jT/QgAdsSKyASEENPoLsggjshA0/DT5NP0iEk2yB7NCAIE1/zX+Nf01/DX7Nfo1+TX4Nfc0/SEUDEEAOzT+NPkINfY09zT4FlA0+RZQNPpQNPsWUDT8FlA0/RZQNP8WUDT2FlAoSwFXAHhnSCEINQEyBjUCQgBINPc0+BZQNPkWUDT6UDT7FlA0/BZQNP8WUChLAVcAaGdIIQ41ATIGNQJCABwxGSESEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIRQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v431",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v432",
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
                "name": "v431",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v432",
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
                "name": "v533",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v534",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v535",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v536",
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
                "name": "v621",
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
                "name": "v499",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
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
                "name": "v517",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v518",
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
                "name": "v533",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v534",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v535",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v536",
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
                "name": "v621",
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
                "name": "v499",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
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
                "name": "v517",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v518",
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
  Bytecode: `0x60806040526040516200258d3803806200258d8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b612210806200037d6000396000f3fe6080604052600436106100a55760003560e01c80638b9fadc8116100615780638b9fadc814610133578063ab53f2c614610146578063ad9fa3d814610169578063bf2c5b241461017c578063c6524acb1461018f578063de736998146101a257005b80631e93b0f1146100ae57806321642639146100d25780632c10a159146100e55780637eea518c146100f8578063832307571461010b5780638328d4c41461012057005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611b16565b6101b5565b6100ac6100f3366004611b4b565b610448565b6100ac610106366004611b4b565b6105d7565b34801561011757600080fd5b506001546100bf565b6100ac61012e366004611b16565b610755565b6100ac610141366004611b4b565b6109e4565b34801561015257600080fd5b5061015b610b80565b6040516100c9929190611b67565b6100ac610177366004611b4b565b610c1d565b6100ac61018a366004611b4b565b610ddb565b6100ac61019d366004611bc4565b610f36565b6100ac6101b0366004611b4b565b6112df565b6101c56007600054146016611477565b6101df813515806101d857506001548235145b6017611477565b6000808055600280546101f190611bd6565b80601f016020809104026020016040519081016040528092919081815260200182805461021d90611bd6565b801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b50505050508060200190518101906102829190611cc3565b905061029a6040518060200160405280600081525090565b6102ac82610100015143106018611477565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102dd929190611d4c565b60405180910390a16102f134156014611477565b8151610309906001600160a01b031633146015611477565b61031743836040015161149d565b81600001818152505061038f60405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e0808601519084015285810135610100840152858201356101208401528351610140840152600960005543600155905161041d91839101611d7d565b604051602081830303815290604052600290805190602001906104419291906118f9565b5050505050565b6104586001600054146009611477565b6104728135158061046b57506001548235145b600a611477565b60008080556002805461048490611bd6565b80601f01602080910402602001604051908101604052809291908181526020018280546104b090611bd6565b80156104fd5780601f106104d2576101008083540402835291602001916104fd565b820191906000526020600020905b8154815290600101906020018083116104e057829003601f168201915b50505050508060200190518101906105159190611e10565b905061052881606001514310600b611477565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610559929190611e99565b60405180910390a1610572816020015134146008611477565b61057a61197d565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525180016020820151604001526105d2816114f0565b505050565b6105e7600160005414600d611477565b610601813515806105fa57506001548235145b600e611477565b60008080556002805461061390611bd6565b80601f016020809104026020016040519081016040528092919081815260200182805461063f90611bd6565b801561068c5780601f106106615761010080835404028352916020019161068c565b820191906000526020600020905b81548152906001019060200180831161066f57829003601f168201915b50505050508060200190518101906106a49190611e10565b90506106b88160600151431015600f611477565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106e9929190611e99565b60405180910390a16106fd3415600c611477565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561073a573d6000803e3d6000fd5b5060008080556001819055610751906002906119be565b5050565b6107656009600054146020611477565b61077f8135158061077857506001548235145b6021611477565b60008080556002805461079190611bd6565b80601f01602080910402602001604051908101604052809291908181526020018280546107bd90611bd6565b801561080a5780601f106107df5761010080835404028352916020019161080a565b820191906000526020600020905b8154815290600101906020018083116107ed57829003601f168201915b50505050508060200190518101906108229190611ece565b905061083a6040518060200160405280600081525090565b61084c82610140015143106022611477565b7f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e338460405161087d929190611d4c565b60405180910390a16108913415601e611477565b60608201516108ac906001600160a01b03163314601f611477565b6108ba43836040015161149d565b816000018181525050610940604051806101a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e080860151908401526101008086015190840152610120808601519084015285810135610140840152858201356101608401528351610180840152600b60005543600155905161041d91839101611f6f565b6109f4600b600054146031611477565b610a0e81351580610a0757506001548235145b6032611477565b600080805560028054610a2090611bd6565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4c90611bd6565b8015610a995780601f10610a6e57610100808354040283529160200191610a99565b820191906000526020600020905b815481529060010190602001808311610a7c57829003601f168201915b5050505050806020019051810190610ab1919061201a565b9050610ac68161018001514310156033611477565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503383604051610af7929190611e99565b60405180910390a1610b0b3415602f611477565b8051610b3f906001600160a01b03163314610b355760608201516001600160a01b03163314610b38565b60015b6030611477565b80606001516001600160a01b03166108fc8260e001519081150290604051600060405180830381858888f1935050505015801561073a573d6000803e3d6000fd5b600060606000546002808054610b9590611bd6565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc190611bd6565b8015610c0e5780601f10610be357610100808354040283529160200191610c0e565b820191906000526020600020905b815481529060010190602001808311610bf157829003601f168201915b50505050509050915091509091565b610c2d6006600054146012611477565b610c4781351580610c4057506001548235145b6013611477565b600080805560028054610c5990611bd6565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8590611bd6565b8015610cd25780601f10610ca757610100808354040283529160200191610cd2565b820191906000526020600020905b815481529060010190602001808311610cb557829003601f168201915b5050505050806020019051810190610cea91906120cd565b90507f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213653383604051610d1d929190611e99565b60405180910390a1610d3134156010611477565b8051610d49906001600160a01b031633146011611477565b610d5161197d565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260a0820151608083015111610db35781608001518260a0015111610dac576001610db6565b6002610db6565b60005b602080830180519290925281514391015260c08301519051604001526105d2816114f0565b610deb600760005414601b611477565b610e0581351580610dfe57506001548235145b601c611477565b600080805560028054610e1790611bd6565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4390611bd6565b8015610e905780601f10610e6557610100808354040283529160200191610e90565b820191906000526020600020905b815481529060010190602001808311610e7357829003601f168201915b5050505050806020019051810190610ea89190611cc3565b9050610ebd816101000151431015601d611477565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610eee929190611e99565b60405180910390a1610f0234156019611477565b8051610b3f906001600160a01b03163314610f2c5760608201516001600160a01b03163314610f2f565b60015b601a611477565b610f46600b60005414602c611477565b610f6081351580610f5957506001548235145b602d611477565b600080805560028054610f7290611bd6565b80601f0160208091040260200160405190810160405280929190818152602001828054610f9e90611bd6565b8015610feb5780601f10610fc057610100808354040283529160200191610feb565b820191906000526020600020905b815481529060010190602001808311610fce57829003601f168201915b5050505050806020019051810190611003919061201a565b905061100d6119f8565b61101f8261018001514310602e611477565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fdb9ff2b40f343678ee44b2c47534959c4772eba0faec02287a146c07d5288e739060c00160405180910390a161109234156028611477565b81516110aa906001600160a01b031633146029611477565b604080516110f8916110d19190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c83610100015114602a611477565b60408051608085013560208083019190915260608087013583850152835180840385018152920190925280519101206101208301516111399114602b611477565b6101608201516060840135141561115357600181526111af565b611169836020016000013583610140015161149d565b602082018190526060840135141561118757600060408201526111a7565b81610160015181602001511461119e5760016111a1565b60025b60408201525b604081015181525b8051611201576111c48260800151600261149d565b6080820180519190915260a083015190516020015260c08201516111e990600161149d565b60808201805160400191909152516060820152611255565b6112108260800151600161149d565b60a0808301519190915282015161122890600161149d565b60a08201516020015260c082015161124190600161149d565b60a082018051604001919091525160608201525b61125d611a65565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169381019390935284830180515183860180519190915281518401518151909401939093525181015182519091015280514392019190915260e08401519051608001526112d9816115fc565b50505050565b6112ef6009600054146025611477565b6113098135158061130257506001548235145b6026611477565b60008080556002805461131b90611bd6565b80601f016020809104026020016040519081016040528092919081815260200182805461134790611bd6565b80156113945780601f1061136957610100808354040283529160200191611394565b820191906000526020600020905b81548152906001019060200180831161137757829003601f168201915b50505050508060200190518101906113ac9190611ece565b90506113c18161014001514310156027611477565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516113f2929190611e99565b60405180910390a161140634156023611477565b805161143a906001600160a01b031633146114305760608201516001600160a01b03163314611433565b60015b6024611477565b805160e08201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561073a573d6000803e3d6000fd5b816107515760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826114aa8382612181565b91508110156114ea5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611494565b92915050565b6020810151516001141561158157611506611a65565b81515181516001600160a01b039182169052825160209081015183518201528351604090810151845182015284516060908101518551941693810193909352818401805160009081905281518401819052815183015282860180519093015181519094019390935290510151905160800152610751816115fc565b602081015151156115975780516060015161159b565b8051515b6001600160a01b03166108fc6115ba600284600001516020015161189a565b6040518115909202916000818181858888f193505050501580156115e2573d6000803e3d6000fd5b50600080805560018190556115f9906002906119be565b50565b604080516020810190915260008152600382602001516040015110156117925761163682602001516060015183600001516040015161149d565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091528251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252808501805151608080860191909152815183015160a0860152815184015160c08601529051015160e08401528351610100840152600760005543600155905161176e9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906112d99291906118f9565b6117e46040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b018051516080808c01918252825189015160a0808e01918252935182015160c0808f0191825260066000554360015589519b8c019c909c529851978a01979097529451938801939093529051909716918501919091525194830194909452925191810191909152905160e08201526101000161176e565b60008115806118be575082826118b08183612199565b92506118bc90836121b8565b145b6114ea5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611494565b82805461190590611bd6565b90600052602060002090601f016020900481019282611927576000855561196d565b82601f1061194057805160ff191683800117855561196d565b8280016001018555821561196d579182015b8281111561196d578251825591602001919060010190611952565b50611979929150611aaf565b5090565b6040518060400160405280611990611ac4565b81526020016119b960405180606001604052806000815260200160008152602001600081525090565b905290565b5080546119ca90611bd6565b6000825580601f106119da575050565b601f0160209004906000526020600020908101906115f99190611aaf565b6040518060c00160405280600081526020016000815260200160008152602001611a3c60405180606001604052806000815260200160008152602001600081525090565b815260200161199060405180606001604052806000815260200160008152602001600081525090565b6040518060400160405280611a78611ac4565b81526020016119b96040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b5b808211156119795760008155600101611ab0565b604051806080016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b600060608284031215611b1057600080fd5b50919050565b600060608284031215611b2857600080fd5b611b328383611afe565b9392505050565b600060408284031215611b1057600080fd5b600060408284031215611b5d57600080fd5b611b328383611b39565b82815260006020604081840152835180604085015260005b81811015611b9b57858101830151858201606001528201611b7f565b81811115611bad576000606083870101525b50601f01601f191692909201606001949350505050565b600060a08284031215611b1057600080fd5b600181811c90821680611bea57607f821691505b60208210811415611b1057634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff81118282101715611c3d57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610160810167ffffffffffffffff81118282101715611c3d57634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715611c3d57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611cbe57600080fd5b919050565b60006101208284031215611cd657600080fd5b611cde611c0b565b611ce783611ca7565b81526020830151602082015260408301516040820152611d0960608401611ca7565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6001600160a01b038316815260808101611b3260208301848035825260208082013590830152604090810135910152565b81516001600160a01b03168152610160810160208301516020830152604083015160408301526060830151611dbd60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525092915050565b600060808284031215611e2257600080fd5b6040516080810181811067ffffffffffffffff82111715611e5357634e487b7160e01b600052604160045260246000fd5b604052611e5f83611ca7565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b80358015158114611cbe57600080fd5b6001600160a01b038316815281356020808301919091526060820190611ec0908401611e89565b151560408301529392505050565b60006101608284031215611ee157600080fd5b611ee9611c43565b611ef283611ca7565b81526020830151602082015260408301516040820152611f1460608401611ca7565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152508091505092915050565b81516001600160a01b031681526101a0810160208301516020830152604083015160408301526060830151611faf60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151818401525061018080840151818401525092915050565b60006101a0828403121561202d57600080fd5b612035611c75565b61203e83611ca7565b8152602083015160208201526040830151604082015261206060608401611ca7565b60608201526080838101519082015260a0808401519082015260c0808401519082015260e080840151908201526101008084015190820152610120808401519082015261014080840151908201526101608084015190820152610180928301519281019290925250919050565b600060e082840312156120df57600080fd5b60405160e0810181811067ffffffffffffffff8211171561211057634e487b7160e01b600052604160045260246000fd5b60405261211c83611ca7565b8152602083015160208201526040830151604082015261213e60608401611ca7565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156121945761219461216b565b500190565b60008160001904831182151516156121b3576121b361216b565b500290565b6000826121d557634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220c9a640158f57c78bc366375994e65d968cfa669d62f3ae0d0a65ed28c87cbfa664736f6c634300080c0033`,
  BytecodeLen: 9613,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:101:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:107:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:203:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:189:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:116:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:135:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:138:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:146:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:149:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:162:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
