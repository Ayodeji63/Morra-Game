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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2],
      3: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc2, ctc2, ctc2, ctc2]
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
  
  
  const v286 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v287 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v290 = stdlib.protect(ctc0, await interact.pickFinger(), {
    at: './index.rsh:96:45:application',
    fs: ['at ./index.rsh:94:13:application call to [unknown function] (defined at: ./index.rsh:94:17:function exp)'],
    msg: 'pickFinger',
    who: 'Alice'
    });
  const v291 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:97:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:94:13:application call to [unknown function] (defined at: ./index.rsh:94:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v292 = stdlib.digest([ctc0, ctc0], [v291, v290]);
  const v294 = stdlib.protect(ctc0, await interact.guessResult(), {
    at: './index.rsh:102:51:application',
    fs: ['at ./index.rsh:94:13:application call to [unknown function] (defined at: ./index.rsh:94:17:function exp)'],
    msg: 'guessResult',
    who: 'Alice'
    });
  const v295 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:103:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:94:13:application call to [unknown function] (defined at: ./index.rsh:94:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v296 = stdlib.digest([ctc0, ctc0], [v295, v294]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v292, v296, v287, v286],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:110:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0, ctc0],
    pay: [v287, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v299, v300, v301, v302], secs: v304, time: v303, didSend: v107, from: v298 } = txn1;
      
      sim_r.txns.push({
        amt: v301,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v313 = stdlib.safeAdd(v303, v302);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v299, v300, v301, v302], secs: v304, time: v303, didSend: v107, from: v298 } = txn1;
  ;
  const v313 = stdlib.safeAdd(v303, v302);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: ['time', v313],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v298, v299, v300, v301, v302, v313],
      evt_cnt: 0,
      funcNum: 2,
      lct: v303,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v399, time: v398, didSend: v223, from: v397 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v298,
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
      tys: [ctc3, ctc1, ctc1, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v399, time: v398, didSend: v223, from: v397 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:91:52:application',
      fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:90:28:function exp)', 'at ./index.rsh:120:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v320, v321], secs: v323, time: v322, didSend: v120, from: v319 } = txn2;
    const v325 = stdlib.add(v301, v301);
    ;
    const v332 = stdlib.safeAdd(v322, v302);
    const txn3 = await (ctc.sendrecv({
      args: [v298, v299, v300, v301, v319, v320, v321, v325, v332, v291, v290, v295, v294],
      evt_cnt: 4,
      funcNum: 3,
      lct: v322,
      onlyIf: true,
      out_tys: [ctc0, ctc0, ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:130:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v337, v338, v339, v340], secs: v342, time: v341, didSend: v132, from: v336 } = txn3;
        
        ;
        const v348 = stdlib.eq(v340, v321);
        let v349;
        if (v348) {
          v349 = stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '1');
          }
        else {
          const v350 = stdlib.safeAdd(v338, v320);
          const v351 = stdlib.eq(v350, v340);
          let v352;
          if (v351) {
            v352 = stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v354 = stdlib.eq(v350, v321);
            const v355 = v354 ? stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '1');
            v352 = v355;
            }
          v349 = v352;
          }
        const v356 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:145:16:decimal', stdlib.UInt_max, '0'));
        const v357 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:145:40:decimal', stdlib.UInt_max, '2'));
        const v358 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v359 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v360 = v357 ? v358 : v359;
        const v361 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v362 = v356 ? v361 : v360;
        const v363 = v362[stdlib.checkedBigNumberify('./index.rsh:144:9:array', stdlib.UInt_max, '0')];
        const v364 = v362[stdlib.checkedBigNumberify('./index.rsh:144:9:array', stdlib.UInt_max, '1')];
        const v365 = stdlib.safeMul(v363, v301);
        sim_r.txns.push({
          kind: 'from',
          to: v298,
          tok: undefined /* Nothing */
          });
        const v370 = stdlib.safeMul(v364, v301);
        sim_r.txns.push({
          kind: 'from',
          to: v319,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v332],
      tys: [ctc3, ctc1, ctc1, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v298, v299, v300, v301, v319, v320, v321, v325, v332],
        evt_cnt: 0,
        funcNum: 4,
        lct: v322,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v383, time: v382, didSend: v192, from: v381 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v319,
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
        tys: [ctc3, ctc1, ctc1, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v383, time: v382, didSend: v192, from: v381 } = txn4;
      ;
      const v384 = stdlib.addressEq(v298, v381);
      const v385 = stdlib.addressEq(v319, v381);
      const v386 = v384 ? true : v385;
      stdlib.assert(v386, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:132:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:91:52:application',
        fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:90:28:function exp)', 'at ./index.rsh:132:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v337, v338, v339, v340], secs: v342, time: v341, didSend: v132, from: v336 } = txn3;
      ;
      const v343 = stdlib.addressEq(v298, v336);
      stdlib.assert(v343, {
        at: './index.rsh:130:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v344 = stdlib.digest([ctc0, ctc0], [v337, v338]);
      const v345 = stdlib.digestEq(v299, v344);
      stdlib.assert(v345, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./index.rsh:135:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v346 = stdlib.digest([ctc0, ctc0], [v339, v340]);
      const v347 = stdlib.digestEq(v300, v346);
      stdlib.assert(v347, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./index.rsh:136:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v348 = stdlib.eq(v340, v321);
      let v349;
      if (v348) {
        v349 = stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '1');
        }
      else {
        const v350 = stdlib.safeAdd(v338, v320);
        const v351 = stdlib.eq(v350, v340);
        let v352;
        if (v351) {
          v352 = stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v354 = stdlib.eq(v350, v321);
          const v355 = v354 ? stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '1');
          v352 = v355;
          }
        v349 = v352;
        }
      const v356 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:145:16:decimal', stdlib.UInt_max, '0'));
      const v357 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:145:40:decimal', stdlib.UInt_max, '2'));
      const v358 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v359 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v360 = v357 ? v358 : v359;
      const v361 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v362 = v356 ? v361 : v360;
      const v363 = v362[stdlib.checkedBigNumberify('./index.rsh:144:9:array', stdlib.UInt_max, '0')];
      const v364 = v362[stdlib.checkedBigNumberify('./index.rsh:144:9:array', stdlib.UInt_max, '1')];
      const v365 = stdlib.safeMul(v363, v301);
      ;
      const v370 = stdlib.safeMul(v364, v301);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v349), {
        at: './index.rsh:149:24:application',
        fs: ['at ./index.rsh:148:7:application call to [unknown function] (defined at: ./index.rsh:148:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v299, v300, v301, v302], secs: v304, time: v303, didSend: v107, from: v298 } = txn1;
  ;
  const v313 = stdlib.safeAdd(v303, v302);
  stdlib.protect(ctc2, await interact.acceptWager(v301), {
    at: './index.rsh:114:25:application',
    fs: ['at ./index.rsh:113:11:application call to [unknown function] (defined at: ./index.rsh:113:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v317 = stdlib.protect(ctc1, await interact.pickFinger(), {
    at: './index.rsh:115:53:application',
    fs: ['at ./index.rsh:113:11:application call to [unknown function] (defined at: ./index.rsh:113:15:function exp)'],
    msg: 'pickFinger',
    who: 'Bob'
    });
  const v318 = stdlib.protect(ctc1, await interact.guessResult(), {
    at: './index.rsh:116:59:application',
    fs: ['at ./index.rsh:113:11:application call to [unknown function] (defined at: ./index.rsh:113:15:function exp)'],
    msg: 'guessResult',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v298, v299, v300, v301, v302, v313, v317, v318],
    evt_cnt: 2,
    funcNum: 1,
    lct: v303,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [v301, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v320, v321], secs: v323, time: v322, didSend: v120, from: v319 } = txn2;
      
      const v325 = stdlib.add(v301, v301);
      sim_r.txns.push({
        amt: v301,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v332 = stdlib.safeAdd(v322, v302);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v313],
    tys: [ctc3, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v298, v299, v300, v301, v302, v313],
      evt_cnt: 0,
      funcNum: 2,
      lct: v303,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v399, time: v398, didSend: v223, from: v397 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v298,
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
      tys: [ctc3, ctc0, ctc0, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v399, time: v398, didSend: v223, from: v397 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:91:52:application',
      fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:90:28:function exp)', 'at ./index.rsh:120:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v320, v321], secs: v323, time: v322, didSend: v120, from: v319 } = txn2;
    const v325 = stdlib.add(v301, v301);
    ;
    const v332 = stdlib.safeAdd(v322, v302);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 4,
      funcNum: 3,
      out_tys: [ctc1, ctc1, ctc1, ctc1],
      timeoutAt: ['time', v332],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v298, v299, v300, v301, v319, v320, v321, v325, v332],
        evt_cnt: 0,
        funcNum: 4,
        lct: v322,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v383, time: v382, didSend: v192, from: v381 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v319,
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
        tys: [ctc3, ctc0, ctc0, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v383, time: v382, didSend: v192, from: v381 } = txn4;
      ;
      const v384 = stdlib.addressEq(v298, v381);
      const v385 = stdlib.addressEq(v319, v381);
      const v386 = v384 ? true : v385;
      stdlib.assert(v386, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:132:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:91:52:application',
        fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:90:28:function exp)', 'at ./index.rsh:132:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v337, v338, v339, v340], secs: v342, time: v341, didSend: v132, from: v336 } = txn3;
      ;
      const v343 = stdlib.addressEq(v298, v336);
      stdlib.assert(v343, {
        at: './index.rsh:130:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v344 = stdlib.digest([ctc1, ctc1], [v337, v338]);
      const v345 = stdlib.digestEq(v299, v344);
      stdlib.assert(v345, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./index.rsh:135:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v346 = stdlib.digest([ctc1, ctc1], [v339, v340]);
      const v347 = stdlib.digestEq(v300, v346);
      stdlib.assert(v347, {
        at: 'reach standard library:69:17:application',
        fs: ['at ./index.rsh:136:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v348 = stdlib.eq(v340, v321);
      let v349;
      if (v348) {
        v349 = stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '1');
        }
      else {
        const v350 = stdlib.safeAdd(v338, v320);
        const v351 = stdlib.eq(v350, v340);
        let v352;
        if (v351) {
          v352 = stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v354 = stdlib.eq(v350, v321);
          const v355 = v354 ? stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '1');
          v352 = v355;
          }
        v349 = v352;
        }
      const v356 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:145:16:decimal', stdlib.UInt_max, '0'));
      const v357 = stdlib.eq(v349, stdlib.checkedBigNumberify('./index.rsh:145:40:decimal', stdlib.UInt_max, '2'));
      const v358 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v359 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v360 = v357 ? v358 : v359;
      const v361 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v362 = v356 ? v361 : v360;
      const v363 = v362[stdlib.checkedBigNumberify('./index.rsh:144:9:array', stdlib.UInt_max, '0')];
      const v364 = v362[stdlib.checkedBigNumberify('./index.rsh:144:9:array', stdlib.UInt_max, '1')];
      const v365 = stdlib.safeMul(v363, v301);
      ;
      const v370 = stdlib.safeMul(v364, v301);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v349), {
        at: './index.rsh:149:24:application',
        fs: ['at ./index.rsh:148:7:application call to [unknown function] (defined at: ./index.rsh:148:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAJAAEDCAJgBKABcCYDAQABAQAiNQAxGEEDaSpkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAdBJJAxAAYxJIQYMQABXIQYSRCQ0ARJENARJIhJMNAISEUQoZClkUEk1A1doIDX/gASRJzTzsDIGNAMhB1sPRDQDVwAgMQASNP8xABIRRLEisgE0A4GYAVuyCCOyEDT/sgezQgKHSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lJVwAgNf8hBVs1/oGQAVs1/Uk1BUlKIls1/CVbNfuBEFs1+oEYWzX5gAQXE6HjNPwWUDT7FlA0+hZQNPkWULAyBjQDIQdbDEQ0/zEAEkQ0A1cgIDT8FjT7FlABEkQ0A1dAIDT6FjT5FlABEkQ0+TT9EkEABiM190IAJzT7NAOBiAFbCEk19jT5EkEABiI19UIACyMhBDT2NP0STTX1NPU194AQAAAAAAAAAAEAAAAAAAAAAYAQAAAAAAAAAAAAAAAAAAAAAjT3IQQSTYAQAAAAAAAAAAIAAAAAAAAAADT3IhJNNfaxIrIBNPYiWzT+C7III7IQNP+yB7OxIrIBNPYlWzT+C7III7IQNANXaCCyB7NCAVlIIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEIWw9EsSKyATQDIQVbsggjshA0A1cAILIHs0IBG0kjDEAAnUgjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/VyAgNf5XQCA1/SEFWzX8STUFSSJbNfslWzX6gATHtgrVNPsWUDT6FlCwMgY0AyEIWwxENPxJCDX5NPyIAScyBjQDgWhbCDX4NP80/lA0/VA0/BZQMQBQNPsWUDT6FlA0+RZQNPgWUChLAVcAf2cpSwFXfylnSCQ1ATIGNQJCAJRIgaCNBogA3SI0ARJENARJIhJMNAISEURJNQVJSlcAIDX/VyAgNf6BQFs1/YFIWzX8gAQdXWYkNP9QNP5QNP0WUDT8FlCwNP2IAJoyBjT8CDX7MQA0/1A0/lA0/RZQNPwWUDT7FlAoSwFXAHhnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
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
                "name": "v299",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v300",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v302",
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
                "name": "v299",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v300",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v302",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v320",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "internalType": "uint256",
                "name": "v337",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v340",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
    "name": "_reach_e4",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v320",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "internalType": "uint256",
                "name": "v337",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v340",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620014b7380380620014b78339810160408190526200002691620002ed565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606080830191909152928401516080820152919092015160a08201527f470a4274e1f9c3e254bd7c4ecaf5e5f5613417d1b7f0c7b386f5aaacf730e6989060c00160405180910390a1602082015160400151620000b790341460076200018e565b620000d143836020015160600151620001b960201b60201c565b81526040805160c08082018352600060208084018281528486018381526060808701858152608080890187815260a0808b0189815233808d528f8a018051518a5280518b0151895280518f015187525187015184528e51825260019a8b905543909a558c51808a019a909a529651898d0152945193880193909352905190860152519084015251828401528451808303909301835260e09091019093528051919262000184926002929091019062000210565b50505050620003f2565b81620001b55760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600082620001c883826200038e565b91508110156200020a5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401620001ac565b92915050565b8280546200021e90620003b5565b90600052602060002090601f0160209004810192826200024257600085556200028d565b82601f106200025d57805160ff19168380011785556200028d565b828001600101855582156200028d579182015b828111156200028d57825182559160200191906001019062000270565b506200029b9291506200029f565b5090565b5b808211156200029b5760008155600101620002a0565b604051608081016001600160401b0381118282101715620002e757634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200030157600080fd5b604080519081016001600160401b03811182821017156200033257634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200034c57600080fd5b62000356620002b6565b915060208401518252604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b60008219821115620003b057634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003ca57607f821691505b60208210811415620003ec57634e487b7160e01b600052602260045260246000fd5b50919050565b6110b580620004026000396000f3fe60806040526004361061006e5760003560e01c80637eea518c1161004b5780637eea518c146100c157806383230757146100d4578063a7661d54146100e9578063ab53f2c6146100fc57005b80631e93b0f11461007757806342ae229d1461009b5780634725882f146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610d9b565b61011f565b6100756100bc366004610db3565b6103f8565b6100756100cf366004610dc5565b61078e565b3480156100e057600080fd5b50600154610088565b6100756100f7366004610dc5565b61090c565b34801561010857600080fd5b50610111610aa8565b604051610092929190610dd7565b61012f6001600054146009610b45565b6101498135158061014257506001548235145b600a610b45565b60008080556002805461015b90610e34565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610e34565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ebd565b905061020b604051806040016040528060008152602001600081525090565b61021c8260a001514310600b610b45565b604080513381528435602080830191909152850135818301529084013560608201527f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a160608201805180018252516102839034146008610b45565b610291438360800151610b6b565b8160200181815250506102fb60405180610120016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152606080860151908401523360808401528582013560a08401528581013560c0840152835160e084015283820151610100840152600360005543600155516103cd9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906103f1929190610c1d565b5050505050565b6104086003600054146014610b45565b6104228135158061041b57506001548235145b6015610b45565b60008080556002805461043490610e34565b80601f016020809104026020016040519081016040528092919081815260200182805461046090610e34565b80156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b50505050508060200190518101906104c59190610f4a565b90506104cf610ca1565b6104e182610100015143106016610b45565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527f64484377c667f92fce5f46b65350e6c337bb010f75969d1dd12763957840ce949060c00160405180910390a161055434156010610b45565b815161056c906001600160a01b031633146011610b45565b604080516105b89161059291602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360200151146012610b45565b6040805160608581013560208301526080860135928201929092526105fe91016040516020818303038152906040528051906020012060001c8360400151146013610b45565b60c0820151608084013514156106175760018152610671565b61062c83602001602001358360a00151610b6b565b602082018190526080840135141561064a5760006040820152610669565b8160c00151816020015114610660576001610663565b60025b60408201525b604081015181525b606081018051600090819052905160026020918201819052608084018051600190819052905183015260a084018051919091525101528051156106cb5780516002146106c15780608001516106d1565b80606001516106d1565b8060a001515b60c082018190528251905160608401516001600160a01b03909216916108fc916106fa91610bbe565b6040518115909202916000818181858888f19350505050158015610722573d6000803e3d6000fd5b5081608001516001600160a01b03166108fc61074a8360c00151602001518560600151610bbe565b6040518115909202916000818181858888f19350505050158015610772573d6000803e3d6000fd5b506000808055600181905561078990600290610d49565b505050565b61079e600160005414600d610b45565b6107b8813515806107b157506001548235145b600e610b45565b6000808055600280546107ca90610e34565b80601f01602080910402602001604051908101604052809291908181526020018280546107f690610e34565b80156108435780601f1061081857610100808354040283529160200191610843565b820191906000526020600020905b81548152906001019060200180831161082657829003601f168201915b505050505080602001905181019061085b9190610ebd565b905061086f8160a00151431015600f610b45565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516108a0929190610fd3565b60405180910390a16108b43415600c610b45565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108f1573d6000803e3d6000fd5b506000808055600181905561090890600290610d49565b5050565b61091c6003600054146019610b45565b6109368135158061092f57506001548235145b601a610b45565b60008080556002805461094890610e34565b80601f016020809104026020016040519081016040528092919081815260200182805461097490610e34565b80156109c15780601f10610996576101008083540402835291602001916109c1565b820191906000526020600020905b8154815290600101906020018083116109a457829003601f168201915b50505050508060200190518101906109d99190610f4a565b90506109ee816101000151431015601b610b45565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610a1f929190610fd3565b60405180910390a1610a3334156017610b45565b8051610a67906001600160a01b03163314610a5d5760808201516001600160a01b03163314610a60565b60015b6018610b45565b80608001516001600160a01b03166108fc8260e001519081150290604051600060405180830381858888f193505050501580156108f1573d6000803e3d6000fd5b600060606000546002808054610abd90610e34565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae990610e34565b8015610b365780601f10610b0b57610100808354040283529160200191610b36565b820191906000526020600020905b815481529060010190602001808311610b1957829003601f168201915b50505050509050915091509091565b816109085760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610b788382611026565b9150811015610bb85760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610b62565b92915050565b6000811580610be257508282610bd4818361103e565b9250610be0908361105d565b145b610bb85760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610b62565b828054610c2990610e34565b90600052602060002090601f016020900481019282610c4b5760008555610c91565b82601f10610c6457805160ff1916838001178555610c91565b82800160010185558215610c91579182015b82811115610c91578251825591602001919060010190610c76565b50610c9d929150610d86565b5090565b6040518060e00160405280600081526020016000815260200160008152602001610cde604051806040016040528060008152602001600081525090565b8152602001610d00604051806040016040528060008152602001600081525090565b8152602001610d22604051806040016040528060008152602001600081525090565b8152602001610d44604051806040016040528060008152602001600081525090565b905290565b508054610d5590610e34565b6000825580601f10610d65575050565b601f016020900490600052602060002090810190610d839190610d86565b50565b5b80821115610c9d5760008155600101610d87565b600060608284031215610dad57600080fd5b50919050565b600060a08284031215610dad57600080fd5b600060408284031215610dad57600080fd5b82815260006020604081840152835180604085015260005b81811015610e0b57858101830151858201606001528201610def565b81811115610e1d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610e4857607f821691505b60208210811415610dad57634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff81118282101715610e9b57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114610eb857600080fd5b919050565b600060c08284031215610ecf57600080fd5b60405160c0810181811067ffffffffffffffff82111715610f0057634e487b7160e01b600052604160045260246000fd5b604052610f0c83610ea1565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60006101208284031215610f5d57600080fd5b610f65610e69565b610f6e83610ea1565b8152602083015160208201526040830151604082015260608301516060820152610f9a60808401610ea1565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461100157600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561103957611039611010565b500190565b600081600019048311821515161561105857611058611010565b500290565b60008261107a57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220f22cc36075eb1c8260958d6f1aaf04063f0197a1c0d4c2616875c66e0687809164736f6c634300080c0033`,
  BytecodeLen: 5303,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:111:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:120:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:122:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:132:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:151:11:after expr stmt semicolon',
    fs: [],
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
