import { JsonRpcProvider } from '@ethersproject/providers'
import { ethers } from 'ethers'
import {CrosschainMai__factory, EditableERC20__factory, QiStablecoin__factory} from './contracts/factories'

export const ChainId = {
    MAINNET: 1,
    ROPSTEN: 3,
    RINKEBY: 4,
    GÖRLI: 5,
    KOVAN: 42,
    MATIC: 137,
    MATIC_TESTNET: 80001,
    FANTOM: 250,
    FANTOM_TESTNET: 4002,
    XDAI: 100,
    BSC: 56,
    BSC_TESTNET: 97,
    ARBITRUM: 42161,
    MOONBEAM: 1284,
    MOONBASE: 1287,
    AVALANCHE: 43114,
    FUJI: 43113,
    HECO: 128,
    HECO_TESTNET: 256,
    HARMONY: 1666600000,
    HARMONY_TESTNET: 1666700000,
    MOONRIVER: 1285,
    CRONOS: 25,
    OPTIMISM: 10,
    METIS: 1088
} as const

export const ChainName = {
    1: "MAINNET",
    3: "ROPSTEN",
    4: "RINKEBY",
    5: "GÖRLI",
    42: "KOVAN",
    137:  "MATIC",
    80001: "MATIC_TESTNET",
    250: "FANTOM",
    4002: "FANTOM_TESTNET",
    100: "XDAI",
    56: "BSC",
    97: "BSC_TESTNET",
    42161: "ARBITRUM",
    1284: "MOONBEAM",
    1287: "MOONBASE",
    43114: "AVALANCHE",
    43113: "FUJI",
    128: "HECO",
    256: "HECO_TESTNET",
    1666600000: "HARMONY",
    1666700000: "HARMONY_TESTNET",
    1285: "MOONRIVER",
    25: "CRONOS",
    10: "OPTIMISM",
    1088: "METIS"
} as const

export const maiAddresses: {[index: string]:any} = {
    "MATIC": "0xa3fa99a148fa48d14ed51d610c367c61876997f1",
    "SOLANA": "9mWRABuz2x6koTPCWiCPM49WUbcrNqGTHBV9T9k7y1o7",
    "FANTOM": "0xfb98b335551a418cd0737375a2ea0ded62ea213b",
    "AVALANCHE": "0x5c49b268c9841aff1cc3b0a418ff5c3442ee3f3b",
    "MOONRIVER": "0xFb2019DfD635a03cfFF624D210AEe6AF2B00fC2C",
    "HARMONY": "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    "CRONOS": "0x2Ae35c8E3D4bD57e8898FF7cd2bBff87166EF8cb",
    "ARBITRUM": "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    "BOBA": "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    "GNOSIS": "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    "METIS": "0xdFA46478F9e5EA86d57387849598dbFB2e964b02",
    "BSC": "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    "AURORA": "0xdFA46478F9e5EA86d57387849598dbFB2e964b02",
    "CELO": "0xB9C8F0d3254007eE4b98970b94544e473Cd610EC",
    "IOTEX": "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
    "OPTIMISM": "0xdFA46478F9e5EA86d57387849598dbFB2e964b02",
    "MOONBEAM": "0xdfa46478f9e5ea86d57387849598dbfb2e964b02",
}

export type ChainIdKey = typeof ChainId[keyof typeof ChainId]

export const MULTICALL_NETWORKS: { [chainId in ChainIdKey]: string } = {
    [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
    [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
    [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
    [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
    [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
    [ChainId.FANTOM]: '0x63B8310c5093ac917552931D8b15d5AB6945c0a6',
    [ChainId.FANTOM_TESTNET]: '',
    [ChainId.MATIC]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E',
    [ChainId.MATIC_TESTNET]: '0x9Fc8e50Eb08C1F463b45d1AFb9c261B0a1903006',
    [ChainId.XDAI]: '0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a',
    [ChainId.BSC]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
    [ChainId.BSC_TESTNET]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
    [ChainId.ARBITRUM]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
    [ChainId.MOONBASE]: '0x9B7D5fa91b4747031d8E7807DaEC906F0f683E78',
    [ChainId.AVALANCHE]: '0x0FB54156B496b5a040b51A71817aED9e2927912E',
    [ChainId.FUJI]: '0x0053957E18A0994D3526Cf879A4cA7Be88e8936A',
    [ChainId.HECO]: '0xc9a9F768ebD123A00B52e7A0E590df2e9E998707',
    [ChainId.HECO_TESTNET]: '0x935Bfe9AfaA2Be26049ea4EDE40A3A2243361F87',
    [ChainId.HARMONY]: '0xFE4980f62D708c2A84D3929859Ea226340759320',
    [ChainId.HARMONY_TESTNET]: '0xbcd3451992B923531615293Cb2b2c38ba8DE9529',
    [ChainId.MOONBEAM]: '0x83e3b61886770de2F64AAcaD2724ED4f08F7f36B',
    [ChainId.MOONRIVER]: '0xe05349d6fE12602F6084550995B247a5C80C0E2C',
    [ChainId.CRONOS]: '0xA25da25BD11A26F1dd4ea195948305fb7C8cA102',
    [ChainId.OPTIMISM]: '0x142e2feac30d7fc3b61f9ee85fccad8e560154cc',
    [ChainId.METIS]: '0xc39aBB6c4451089dE48Cffb013c39d3110530e5C'
}

export const RPCS: { [chainId in ChainIdKey]?: string } = {
    [ChainId.ARBITRUM]: 'https://arb1.arbitrum.io/rpc',
    [ChainId.FANTOM]: 'https://rpc.ftm.tools/',
    [ChainId.MATIC]: 'https://polygon-rpc.com/',
    [ChainId.MOONBEAM]: 'https://rpc.api.moonbeam.network',
    [ChainId.MOONRIVER]: 'https://moonriver.api.onfinality.io/public',
    [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
    [ChainId.XDAI]: 'https://rpc.ankr.com/gnosis',
    [ChainId.HARMONY]: 'https://rpc.ankr.com/harmony',
    [ChainId.OPTIMISM]: 'https://mainnet.optimism.io/',
    [ChainId.BSC]: 'https://bsc-dataseed.binance.org/',
    [ChainId.METIS]: 'https://andromeda.metis.io/?owner=1088'
}

export const PROVIDERS: { [chainId in ChainIdKey]?: JsonRpcProvider } = {
    [ChainId.ARBITRUM]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.ARBITRUM]),
    [ChainId.FANTOM]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.FANTOM]),
    [ChainId.MATIC]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.MATIC]),
    [ChainId.MOONBEAM]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.MOONBEAM]),
    [ChainId.MOONRIVER]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.MOONRIVER]),
    [ChainId.AVALANCHE]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.AVALANCHE]),
    [ChainId.XDAI]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.XDAI]),
    [ChainId.HARMONY]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.HARMONY]),
    [ChainId.OPTIMISM]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.OPTIMISM]),
    [ChainId.BSC]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.BSC]),
    [ChainId.METIS]: new ethers.providers.JsonRpcProvider(RPCS[ChainId.METIS])
}

export const MAIFACTORIES: {[chainId in ChainIdKey]?: any} = {
    [ChainId.AVALANCHE]: CrosschainMai__factory,
    [ChainId.MOONBEAM]: EditableERC20__factory,
    [ChainId.ARBITRUM]: QiStablecoin__factory,
    [ChainId.FANTOM]: QiStablecoin__factory,
    [ChainId.MATIC]: QiStablecoin__factory,
    [ChainId.MOONRIVER]: EditableERC20__factory,
    [ChainId.XDAI]: QiStablecoin__factory,
    [ChainId.HARMONY]: QiStablecoin__factory,
    [ChainId.OPTIMISM]: QiStablecoin__factory,
    [ChainId.BSC]: QiStablecoin__factory,
    [ChainId.METIS]: EditableERC20__factory

}
