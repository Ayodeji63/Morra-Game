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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Null;
  
  
  const v110 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v113 = stdlib.protect(ctc0, await interact.pickHand(), {
    at: './index.rsh:24:56:application',
    fs: ['at ./index.rsh:22:17:application call to [unknown function] (defined at: ./index.rsh:22:21:function exp)'],
    msg: 'pickHand',
    who: 'Alice'
    });
  const v114 = stdlib.protect(ctc0, await interact.guessResult(), {
    at: './index.rsh:25:65:application',
    fs: ['at ./index.rsh:22:17:application call to [unknown function] (defined at: ./index.rsh:22:21:function exp)'],
    msg: 'guessResult',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v113, v114, v110],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v110, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v116, v117, v118], secs: v120, time: v119, didSend: v33, from: v115 } = txn1;
      
      sim_r.txns.push({
        amt: v118,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v116, v117, v118], secs: v120, time: v119, didSend: v33, from: v115 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v128, v129], secs: v131, time: v130, didSend: v46, from: v127 } = txn2;
  ;
  const v134 = stdlib.safeAdd(v116, v128);
  const v135 = stdlib.eq(v134, v117);
  let v136;
  if (v135) {
    v136 = stdlib.checkedBigNumberify('./index.rsh:40:67:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v138 = stdlib.eq(v134, v129);
    const v139 = v138 ? stdlib.checkedBigNumberify('./index.rsh:41:51:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:42:11:decimal', stdlib.UInt_max, '1');
    v136 = v139;
    }
  const v140 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:46:19:decimal', stdlib.UInt_max, '0'));
  let v141;
  if (v140) {
    const v142 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    v141 = v142;
    }
  else {
    let v145;
    if (v135) {
      v145 = stdlib.checkedBigNumberify('./index.rsh:40:67:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v147 = stdlib.eq(v134, v129);
      const v148 = v147 ? stdlib.checkedBigNumberify('./index.rsh:41:51:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:42:11:decimal', stdlib.UInt_max, '1');
      v145 = v148;
      }
    const v149 = stdlib.eq(v145, stdlib.checkedBigNumberify('./index.rsh:47:19:decimal', stdlib.UInt_max, '2'));
    const v150 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v151 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v152 = v149 ? v150 : v151;
    v141 = v152;
    }
  const v153 = v141[stdlib.checkedBigNumberify('./index.rsh:45:13:array', stdlib.UInt_max, '0')];
  const v154 = v141[stdlib.checkedBigNumberify('./index.rsh:45:13:array', stdlib.UInt_max, '1')];
  const v155 = stdlib.safeMul(v153, v118);
  ;
  const v160 = stdlib.safeMul(v154, v118);
  ;
  let v169;
  if (v135) {
    v169 = stdlib.checkedBigNumberify('./index.rsh:40:67:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v171 = stdlib.eq(v134, v129);
    const v172 = v171 ? stdlib.checkedBigNumberify('./index.rsh:41:51:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:42:11:decimal', stdlib.UInt_max, '1');
    v169 = v172;
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v169), {
    at: './index.rsh:52:28:application',
    fs: ['at ./index.rsh:51:11:application call to [unknown function] (defined at: ./index.rsh:51:29:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
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
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v116, v117, v118], secs: v120, time: v119, didSend: v33, from: v115 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v118), {
    at: './index.rsh:32:29:application',
    fs: ['at ./index.rsh:31:15:application call to [unknown function] (defined at: ./index.rsh:31:19:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v125 = stdlib.protect(ctc0, await interact.pickHand(), {
    at: './index.rsh:33:53:application',
    fs: ['at ./index.rsh:31:15:application call to [unknown function] (defined at: ./index.rsh:31:19:function exp)'],
    msg: 'pickHand',
    who: 'Bob'
    });
  const v126 = stdlib.protect(ctc0, await interact.guessResult(), {
    at: './index.rsh:34:63:application',
    fs: ['at ./index.rsh:31:15:application call to [unknown function] (defined at: ./index.rsh:31:19:function exp)'],
    msg: 'guessResult',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v115, v116, v117, v118, v125, v126],
    evt_cnt: 2,
    funcNum: 1,
    lct: v119,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v118, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v128, v129], secs: v131, time: v130, didSend: v46, from: v127 } = txn2;
      
      sim_r.txns.push({
        amt: v118,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v134 = stdlib.safeAdd(v116, v128);
      const v135 = stdlib.eq(v134, v117);
      let v136;
      if (v135) {
        v136 = stdlib.checkedBigNumberify('./index.rsh:40:67:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v138 = stdlib.eq(v134, v129);
        const v139 = v138 ? stdlib.checkedBigNumberify('./index.rsh:41:51:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:42:11:decimal', stdlib.UInt_max, '1');
        v136 = v139;
        }
      const v140 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:46:19:decimal', stdlib.UInt_max, '0'));
      let v141;
      if (v140) {
        const v142 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        v141 = v142;
        }
      else {
        let v145;
        if (v135) {
          v145 = stdlib.checkedBigNumberify('./index.rsh:40:67:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v147 = stdlib.eq(v134, v129);
          const v148 = v147 ? stdlib.checkedBigNumberify('./index.rsh:41:51:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:42:11:decimal', stdlib.UInt_max, '1');
          v145 = v148;
          }
        const v149 = stdlib.eq(v145, stdlib.checkedBigNumberify('./index.rsh:47:19:decimal', stdlib.UInt_max, '2'));
        const v150 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v151 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v152 = v149 ? v150 : v151;
        v141 = v152;
        }
      const v153 = v141[stdlib.checkedBigNumberify('./index.rsh:45:13:array', stdlib.UInt_max, '0')];
      const v154 = v141[stdlib.checkedBigNumberify('./index.rsh:45:13:array', stdlib.UInt_max, '1')];
      const v155 = stdlib.safeMul(v153, v118);
      sim_r.txns.push({
        kind: 'from',
        to: v115,
        tok: undefined /* Nothing */
        });
      const v160 = stdlib.safeMul(v154, v118);
      sim_r.txns.push({
        kind: 'from',
        to: v127,
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
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v128, v129], secs: v131, time: v130, didSend: v46, from: v127 } = txn2;
  ;
  const v134 = stdlib.safeAdd(v116, v128);
  const v135 = stdlib.eq(v134, v117);
  let v136;
  if (v135) {
    v136 = stdlib.checkedBigNumberify('./index.rsh:40:67:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v138 = stdlib.eq(v134, v129);
    const v139 = v138 ? stdlib.checkedBigNumberify('./index.rsh:41:51:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:42:11:decimal', stdlib.UInt_max, '1');
    v136 = v139;
    }
  const v140 = stdlib.eq(v136, stdlib.checkedBigNumberify('./index.rsh:46:19:decimal', stdlib.UInt_max, '0'));
  let v141;
  if (v140) {
    const v142 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    v141 = v142;
    }
  else {
    let v145;
    if (v135) {
      v145 = stdlib.checkedBigNumberify('./index.rsh:40:67:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v147 = stdlib.eq(v134, v129);
      const v148 = v147 ? stdlib.checkedBigNumberify('./index.rsh:41:51:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:42:11:decimal', stdlib.UInt_max, '1');
      v145 = v148;
      }
    const v149 = stdlib.eq(v145, stdlib.checkedBigNumberify('./index.rsh:47:19:decimal', stdlib.UInt_max, '2'));
    const v150 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v151 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v152 = v149 ? v150 : v151;
    v141 = v152;
    }
  const v153 = v141[stdlib.checkedBigNumberify('./index.rsh:45:13:array', stdlib.UInt_max, '0')];
  const v154 = v141[stdlib.checkedBigNumberify('./index.rsh:45:13:array', stdlib.UInt_max, '1')];
  const v155 = stdlib.safeMul(v153, v118);
  ;
  const v160 = stdlib.safeMul(v154, v118);
  ;
  let v177;
  if (v135) {
    v177 = stdlib.checkedBigNumberify('./index.rsh:40:67:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v179 = stdlib.eq(v134, v129);
    const v180 = v179 ? stdlib.checkedBigNumberify('./index.rsh:41:51:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:42:11:decimal', stdlib.UInt_max, '1');
    v177 = v180;
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v177), {
    at: './index.rsh:52:28:application',
    fs: ['at ./index.rsh:51:11:application call to [unknown function] (defined at: ./index.rsh:51:29:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAEAAEIAiYCAAEAIjUAMRhBAdEoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAPIjEkQjNAESRDQESSISTDQCEhFEKWRJNQOBMFs1/0k1BUkiWzX+JFs1/YAEx7YK1TT+FlA0/RZQsDT/iAGENAOBIFs0/ghJNfs0A4EoWxJJNfpBAAYiNflCAAojJTT7NP0STTX5NPkiEkEAF4AQAAAAAAAAAAIAAAAAAAAAADX4QgBANPpBAAYiNfdCAAojJTT7NP0STTX3gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPclEk01+LEisgE0+CJbNP8LsggjshA0A1cAILIHs7EisgE0+CRbNP8LsggjshAxALIHs0IAYkiBoI0GiADHIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yRbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULA0/YgAjTEANP8WUDT+FlA0/RZQKUsBVwA4Z0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 56,
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
                "name": "v116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v118",
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
                "name": "v116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v118",
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
                "name": "v128",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
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
                "name": "v128",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610b14380380610b1483398101604081905261002291610246565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a1602081015160400151610099903414600761014e565b6100cd604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a090930190528151610146926002920190610177565b505050610313565b816101735760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610183906102d8565b90600052602060002090601f0160209004810192826101a557600085556101eb565b82601f106101be57805160ff19168380011785556101eb565b828001600101855582156101eb579182015b828111156101eb5782518255916020019190600101906101d0565b506101f79291506101fb565b5090565b5b808211156101f757600081556001016101fc565b604051606081016001600160401b038111828210171561024057634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303608081121561025957600080fd5b604080519081016001600160401b038111828210171561028957634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156102a257600080fd5b6102aa610210565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806102ec57607f821691505b6020821081141561030d57634e487b7160e01b600052602260045260246000fd5b50919050565b6107f2806103226000396000f3fe6080604052600436106100405760003560e01c80631e93b0f11461004957806342ae229d1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b36600461061a565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610399565b604051610064929190610632565b6100c86001600054146009610436565b6100e2813515806100db57506001548235145b600a610436565b6000808055600280546100f49061068f565b80601f01602080910402602001604051908101604052809291908181526020018280546101209061068f565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906106c4565b905061018f610512565b604080513381528435602080830191909152850135818301529084013560608201527f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a16101ef826060015134146008610436565b60208083015161020191850135610460565b8082526040830151146020820181905215610222576000604082015261023e565b8051604084013514610235576001610238565b60025b60408201525b60408101516102665760808101805160029052805160006020909101525160608201526102e2565b80602001511561027c57600060a0820152610298565b805160408401351461028f576001610292565b60025b60a08201525b60c08101805160009052516002602091820181905260e08301805160019081905290519092019190915260a0820151146102d6578060e001516102dc565b8060c001515b60608201525b81600001516001600160a01b03166108fc61030983606001516000015185606001516104b3565b6040518115909202916000818181858888f19350505050158015610331573d6000803e3d6000fd5b50336001600160a01b03166108fc61035583606001516020015185606001516104b3565b6040518115909202916000818181858888f1935050505015801561037d573d6000803e3d6000fd5b5060008080556001819055610394906002906105c4565b505050565b6000606060005460028080546103ae9061068f565b80601f01602080910402602001604051908101604052809291908181526020018280546103da9061068f565b80156104275780601f106103fc57610100808354040283529160200191610427565b820191906000526020600020905b81548152906001019060200180831161040a57829003601f168201915b50505050509050915091509091565b8161045c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008261046d8382610763565b91508110156104ad5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610453565b92915050565b60008115806104d7575082826104c9818361077b565b92506104d5908361079a565b145b6104ad5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610453565b6040518061010001604052806000815260200160001515815260200160008152602001610552604051806040016040528060008152602001600081525090565b8152602001610574604051806040016040528060008152602001600081525090565b81526020016000815260200161059d604051806040016040528060008152602001600081525090565b81526020016105bf604051806040016040528060008152602001600081525090565b905290565b5080546105d09061068f565b6000825580601f106105e0575050565b601f0160209004906000526020600020908101906105fe9190610601565b50565b5b808211156106165760008155600101610602565b5090565b60006060828403121561062c57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156106665785810183015185820160600152820161064a565b81811115610678576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806106a357607f821691505b6020821081141561062c57634e487b7160e01b600052602260045260246000fd5b6000608082840312156106d657600080fd5b6040516080810181811067ffffffffffffffff8211171561070757634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461072157600080fd5b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156107765761077661074d565b500190565b60008160001904831182151516156107955761079561074d565b500290565b6000826107b757634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212201ba2e0893b8b9cd886700073809253b209728451586c1fce096d9fb993460a4f64736f6c634300080c0033`,
  BytecodeLen: 2836,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:54:15:after expr stmt semicolon',
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
