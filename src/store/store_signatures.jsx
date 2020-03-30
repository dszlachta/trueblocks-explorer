import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext from 'store';

//----------------------------------------------------------------------
export const signaturesDefault = [
  {
    name: '_doSafeBatchTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)',
    encoding: '0xe51c223d',
    input_names: '_operator,_from,_to,_ids,_values,_data,'
  },
  {
    name: '_doSafeTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)',
    encoding: '0x084e9e24',
    input_names: '_operator,_from,_to,_id,_value,_data,'
  },
  {
    name: 'add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address,uint256)',
    encoding: '0x00fdd58e',
    input_names: '_owner,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfBatch',
    type: 'function',
    signature: 'balanceOfBatch(address[],uint256[])',
    encoding: '0x4e1273f4',
    input_names: '_owners,_ids,',
    output_names: 'memory,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(uint256,string)',
    encoding: '0x0118fa49',
    input_names: '_initialSupply,_uri,',
    output_names: '_id,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(string,bool)',
    encoding: '0xcc10e401',
    input_names: '_uri,_isNF,',
    output_names: '_type,'
  },
  {
    name: 'div',
    type: 'function',
    signature: 'div(uint256,uint256)',
    encoding: '0xa391c15b',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleBaseType',
    type: 'function',
    signature: 'getNonFungibleBaseType(uint256)',
    encoding: '0x6f969c2d',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleIndex',
    type: 'function',
    signature: 'getNonFungibleIndex(uint256)',
    encoding: '0x9cca1c64',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: 'account,',
    output_names: 'ret_0,'
  },
  {
    name: 'isFungible',
    type: 'function',
    signature: 'isFungible(uint256)',
    encoding: '0xadebf6f2',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungible',
    type: 'function',
    signature: 'isNonFungible(uint256)',
    encoding: '0xe44591f0',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleBaseType',
    type: 'function',
    signature: 'isNonFungibleBaseType(uint256)',
    encoding: '0x7269a327',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleItem',
    type: 'function',
    signature: 'isNonFungibleItem(uint256)',
    encoding: '0x5e81b958',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(uint256,address[],uint256[])',
    encoding: '0xcfa84fc1',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintFungible',
    type: 'function',
    signature: 'mintFungible(uint256,address[],uint256[])',
    encoding: '0x78b27221',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintNonFungible',
    type: 'function',
    signature: 'mintNonFungible(uint256,address[])',
    encoding: '0xf9419088',
    input_names: '_type,_to,'
  },
  {
    name: 'mul',
    type: 'function',
    signature: 'mul(uint256,uint256)',
    encoding: '0xc8a4ac9c',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'onERC1155BatchReceived',
    type: 'function',
    signature: 'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xbc197c81',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC1155Received',
    type: 'function',
    signature: 'onERC1155Received(address,address,uint256,uint256,bytes)',
    encoding: '0xf23a6e61',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXBatchReceived',
    type: 'function',
    signature: 'onERCXXXXBatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xe9e5be6a',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXReceived',
    type: 'function',
    signature: 'onERCXXXXReceived(address,address,uint256,uint256,bytes)',
    encoding: '0xeb510be8',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeBatchTransferFrom',
    type: 'function',
    signature: 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    encoding: '0x2eb2c2d6',
    input_names: '_from,_to,_ids,_values,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,uint256,bytes)',
    encoding: '0xf242432a',
    input_names: '_from,_to,_id,_value,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'setCompleted',
    type: 'function',
    signature: 'setCompleted(uint256)',
    encoding: '0xfdacd576',
    input_names: 'completed,'
  },
  {
    name: 'setShouldReject',
    type: 'function',
    signature: 'setShouldReject(bool)',
    encoding: '0xa175b638',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectClash',
    type: 'function',
    signature: 'setShouldRejectClash(bool)',
    encoding: '0x2090dd24',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectXXXX',
    type: 'function',
    signature: 'setShouldRejectXXXX(bool)',
    encoding: '0x80f5fe74',
    input_names: '_value,'
  },
  {
    name: 'setURI',
    type: 'function',
    signature: 'setURI(string,uint256)',
    encoding: '0x67db3b8f',
    input_names: '_uri,_id,'
  },
  {
    name: 'sub',
    type: 'function',
    signature: 'sub(uint256,uint256)',
    encoding: '0xb67d77c5',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'updateContract',
    type: 'function',
    signature: 'updateContract(address,string,string)',
    encoding: '0x61455567',
    input_names: '_delegate,_functionSignatures,_commitMessage,'
  },
  {
    name: 'upgrade',
    type: 'function',
    signature: 'upgrade(address)',
    encoding: '0x0900f010',
    input_names: 'new_address,'
  },
  {
    name: 'uri',
    type: 'function',
    signature: 'uri(uint256)',
    encoding: '0x0e89341c',
    input_names: '_id,',
    output_names: 'memory,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256,uint256,uint256)',
    encoding: '0x3a9c85c6b31f7a9d7fe1478f53e1be42e85db97ca30d1789cfef9196dbc472c9',
    input_names: '_owner,_spender,_id,_oldValue,_value,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'CommitMessage',
    type: 'event',
    signature: 'CommitMessage(string)',
    encoding: '0xaa1c0a0a78cec2470f9652e5d29540752e7a64d70f926933cebf13afaeda45de',
    input_names: 'message,'
  },
  {
    name: 'FunctionUpdate',
    type: 'event',
    signature: 'FunctionUpdate(bytes4,address,address,string)',
    encoding: '0x3234040ce3bd4564874e44810f198910133a1b24c4e84aac87edbf6b458f5353',
    input_names: 'functionId,oldDelegate,newDelegate,functionSignature,'
  },
  {
    name: 'TransferBatch',
    type: 'event',
    signature: 'TransferBatch(address,address,address,uint256[],uint256[])',
    encoding: '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
    input_names: '_operator,_from,_to,_ids,_values,'
  },
  {
    name: 'TransferSingle',
    type: 'event',
    signature: 'TransferSingle(address,address,address,uint256,uint256)',
    encoding: '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
    input_names: '_operator,_from,_to,_id,_value,'
  },
  {
    name: 'URI',
    type: 'event',
    signature: 'URI(string,uint256)',
    encoding: '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b',
    input_names: '_value,_id,'
  },
  {
    name: 'canTransfer',
    type: 'function',
    signature: 'canTransfer(address,uint256,bytes)',
    encoding: '0x1badb25c',
    input_names: '_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'canTransferFrom',
    type: 'function',
    signature: 'canTransferFrom(address,address,uint256,bytes)',
    encoding: '0x122eb575',
    input_names: '_from,_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'isIssuable',
    type: 'function',
    signature: 'isIssuable()',
    encoding: '0x2f1cae85',
    output_names: 'ret_0,'
  },
  {
    name: 'issue',
    type: 'function',
    signature: 'issue(address,uint256,bytes)',
    encoding: '0xbb3acde9',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'redeem',
    type: 'function',
    signature: 'redeem(uint256,bytes)',
    encoding: '0xe77c646d',
    input_names: '_value,_data,'
  },
  {
    name: 'redeemFrom',
    type: 'function',
    signature: 'redeemFrom(address,uint256,bytes)',
    encoding: '0x9675193c',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'transferFromWithData',
    type: 'function',
    signature: 'transferFromWithData(address,address,uint256,bytes)',
    encoding: '0xee532f31',
    input_names: '_from,_to,_value,_data,'
  },
  {
    name: 'transferWithData',
    type: 'function',
    signature: 'transferWithData(address,uint256,bytes)',
    encoding: '0x2535f762',
    input_names: '_to,_value,_data,'
  },
  {
    name: 'Issued',
    type: 'event',
    signature: 'Issued(address,address,uint256,bytes)',
    encoding: '0x0e9905d62635f049c2f4e11678ebf9dc3d1f8c4a653e290759b772e47ba00d00',
    input_names: '_operator,_to,_value,_data,'
  },
  {
    name: 'Redeemed',
    type: 'event',
    signature: 'Redeemed(address,address,uint256,bytes)',
    encoding: '0xb7d0d6b60740753e9f16692a2f479472a1385aec2420fa43225b02f2ffa1afe7',
    input_names: '_operator,_from,_value,_data,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'canImplementInterfaceForAddress',
    type: 'function',
    signature: 'canImplementInterfaceForAddress(bytes32,address)',
    encoding: '0x249cb3fa',
    input_names: 'interfaceHash,addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'getInterfaceImplementer',
    type: 'function',
    signature: 'getInterfaceImplementer(address,bytes32)',
    encoding: '0xaabbb8ca',
    input_names: '_addr,_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'getManager',
    type: 'function',
    signature: 'getManager(address)',
    encoding: '0x3d584063',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165Interface',
    type: 'function',
    signature: 'implementsERC165Interface(address,bytes4)',
    encoding: '0xf712f3e8',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165InterfaceNoCache',
    type: 'function',
    signature: 'implementsERC165InterfaceNoCache(address,bytes4)',
    encoding: '0xb7056765',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'interfaceHash',
    type: 'function',
    signature: 'interfaceHash(string)',
    encoding: '0x65ba36c1',
    input_names: '_interfaceName,',
    output_names: 'ret_0,'
  },
  {
    name: 'isERC165Interface',
    type: 'function',
    signature: 'isERC165Interface(bytes32)',
    encoding: '0x9d4cf268',
    input_names: '_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'noThrowCall',
    type: 'function',
    signature: 'noThrowCall(address,bytes4)',
    encoding: '0xf86cd33d',
    input_names: '_contract,_interfaceId,',
    output_names: 'success,result,'
  },
  {
    name: 'setInterfaceImplementer',
    type: 'function',
    signature: 'setInterfaceImplementer(address,bytes32,address)',
    encoding: '0x29965a1d',
    input_names: '_addr,_interfaceHash,_implementer,'
  },
  {
    name: 'setManager',
    type: 'function',
    signature: 'setManager(address,address)',
    encoding: '0x5df8122f',
    input_names: '_addr,_newManager,'
  },
  {
    name: 'updateERC165Cache',
    type: 'function',
    signature: 'updateERC165Cache(address,bytes4)',
    encoding: '0xa41e7d51',
    input_names: '_contract,_interfaceId,'
  },
  {
    name: 'InterfaceImplementerSet',
    type: 'event',
    signature: 'InterfaceImplementerSet(address,bytes32,address)',
    encoding: '0x93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db153',
    input_names: 'addr,interfaceHash,implementer,'
  },
  {
    name: 'ManagerChanged',
    type: 'event',
    signature: 'ManagerChanged(address,address)',
    encoding: '0x605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a4350',
    input_names: 'addr,newManager,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'ret_0,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: '_name,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_tokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: '_symbol,'
  },
  {
    name: 'tokenURI',
    type: 'function',
    signature: 'tokenURI(uint256)',
    encoding: '0xc87b56dd',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_approved,_tokenId,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'authorizeOperator',
    type: 'function',
    signature: 'authorizeOperator(address)',
    encoding: '0x959b8c3f',
    input_names: 'operator,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: 'holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'burn',
    type: 'function',
    signature: 'burn(uint256,bytes)',
    encoding: '0xfe9d9303',
    input_names: 'amount,data,'
  },
  {
    name: 'defaultOperators',
    type: 'function',
    signature: 'defaultOperators()',
    encoding: '0x06e48538',
    output_names: 'memory,'
  },
  {
    name: 'granularity',
    type: 'function',
    signature: 'granularity()',
    encoding: '0x556f0dc7',
    output_names: 'ret_0,'
  },
  {
    name: 'isOperatorFor',
    type: 'function',
    signature: 'isOperatorFor(address,address)',
    encoding: '0xd95b6371',
    input_names: 'operator,holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'memory,'
  },
  {
    name: 'operatorBurn',
    type: 'function',
    signature: 'operatorBurn(address,uint256,bytes,bytes)',
    encoding: '0xfc673c4f',
    input_names: 'from,amount,data,operatorData,'
  },
  {
    name: 'operatorSend',
    type: 'function',
    signature: 'operatorSend(address,address,uint256,bytes,bytes)',
    encoding: '0x62ad1b83',
    input_names: 'from,to,amount,data,operatorData,'
  },
  {
    name: 'revokeOperator',
    type: 'function',
    signature: 'revokeOperator(address)',
    encoding: '0xfad8b32a',
    input_names: 'operator,'
  },
  {
    name: 'send',
    type: 'function',
    signature: 'send(address,uint256,bytes)',
    encoding: '0x9bd9bbc6',
    input_names: 'to,amount,data,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'memory,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'ret_0,'
  },
  {
    name: 'AuthorizedOperator',
    type: 'event',
    signature: 'AuthorizedOperator(address,address)',
    encoding: '0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9',
    input_names: 'operator,holder,'
  },
  {
    name: 'Burned',
    type: 'event',
    signature: 'Burned(address,address,uint256,bytes,bytes)',
    encoding: '0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098',
    input_names: 'operator,from,amount,data,operatorData,'
  },
  {
    name: 'Minted',
    type: 'event',
    signature: 'Minted(address,address,uint256,bytes,bytes)',
    encoding: '0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d',
    input_names: 'operator,to,amount,data,operatorData,'
  },
  {
    name: 'RevokedOperator',
    type: 'event',
    signature: 'RevokedOperator(address,address)',
    encoding: '0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1',
    input_names: 'operator,holder,'
  },
  {
    name: 'Sent',
    type: 'event',
    signature: 'Sent(address,address,address,uint256,bytes,bytes)',
    encoding: '0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987',
    input_names: 'operator,from,to,amount,data,operatorData,'
  },
  {
    name: '_ownerOfChild',
    type: 'function',
    signature: '_ownerOfChild(address,uint256)',
    encoding: '0xa5aeb1d4',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: '_transferFrom',
    type: 'function',
    signature: '_transferFrom(address,address,uint256)',
    encoding: '0xcb712535',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'remaining,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_tokenOwner,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfERC20',
    type: 'function',
    signature: 'balanceOfERC20(uint256,address)',
    encoding: '0xe226ed22',
    input_names: '_tokenId,__erc20Contract,',
    output_names: 'ret_0,'
  },
  {
    name: 'childContractByIndex',
    type: 'function',
    signature: 'childContractByIndex(uint256,uint256)',
    encoding: '0x0d5a621b',
    input_names: '_tokenId,_index,',
    output_names: 'childContract,'
  },
  {
    name: 'childExists',
    type: 'function',
    signature: 'childExists(address,uint256)',
    encoding: '0x5680a3ad',
    input_names: '_childContract,_childTokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'childTokenByIndex',
    type: 'function',
    signature: 'childTokenByIndex(uint256,address,uint256)',
    encoding: '0x160b01a1',
    input_names: '_tokenId,_childContract,_index,',
    output_names: 'childTokenId,'
  },
  {
    name: 'erc20ContractByIndex',
    type: 'function',
    signature: 'erc20ContractByIndex(uint256,uint256)',
    encoding: '0x627c81ff',
    input_names: '_tokenId,_index,',
    output_names: 'ret_0,'
  },
  {
    name: 'erc20Received',
    type: 'function',
    signature: 'erc20Received(address,uint256,address,uint256)',
    encoding: '0x9e95670d',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'getChild',
    type: 'function',
    signature: 'getChild(address,uint256,address,uint256)',
    encoding: '0xba6b5f96',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'getERC20',
    type: 'function',
    signature: 'getERC20(address,uint256,address,uint256)',
    encoding: '0x07cff6f2',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(address)',
    encoding: '0x6a627842',
    input_names: '_to,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,uint256,bytes)',
    encoding: '0xf0b9e5ba',
    input_names: '_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'tokenOwner,'
  },
  {
    name: 'ownerOfChild',
    type: 'function',
    signature: 'ownerOfChild(address,uint256)',
    encoding: '0xeadb80b8',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: 'receiveChild',
    type: 'function',
    signature: 'receiveChild(address,uint256,address,uint256)',
    encoding: '0x597c255f',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeChild',
    type: 'function',
    signature: 'removeChild(uint256,address,uint256)',
    encoding: '0x0f0ba766',
    input_names: '_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeERC20',
    type: 'function',
    signature: 'removeERC20(uint256,address,uint256)',
    encoding: '0x9771ccc8',
    input_names: '_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'rootOwnerOf',
    type: 'function',
    signature: 'rootOwnerOf(uint256)',
    encoding: '0x43a61a8e',
    input_names: '_tokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'rootOwnerOfChild',
    type: 'function',
    signature: 'rootOwnerOfChild(address,uint256)',
    encoding: '0xed81cdda',
    input_names: '_childContract,_childTokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256)',
    encoding: '0x1d98f3c5',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256,bytes)',
    encoding: '0x8d81f51e',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'tokenFallback',
    type: 'function',
    signature: 'tokenFallback(address,uint256,bytes)',
    encoding: '0xc0ee0b8a',
    input_names: '_from,_value,_data,'
  },
  {
    name: 'totalChildContracts',
    type: 'function',
    signature: 'totalChildContracts(uint256)',
    encoding: '0x8da7d0b5',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalChildTokens',
    type: 'function',
    signature: 'totalChildTokens(uint256,address)',
    encoding: '0x35b21ceb',
    input_names: '_tokenId,_childContract,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalERC20Contracts',
    type: 'function',
    signature: 'totalERC20Contracts(uint256)',
    encoding: '0xa7811732',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: 'to,value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256,bytes)',
    encoding: '0xbe45fd62',
    input_names: 'to,value,data,',
    output_names: 'success,'
  },
  {
    name: 'transferChild',
    type: 'function',
    signature: 'transferChild(uint256,address,address,uint256)',
    encoding: '0xbef44f18',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'transferChildToParent',
    type: 'function',
    signature: 'transferChildToParent(uint256,address,uint256,address,uint256,bytes)',
    encoding: '0x08937f62',
    input_names: '_fromTokenId,_toContract,_toTokenId,_childContract,_childTokenId,_data,'
  },
  {
    name: 'transferERC20',
    type: 'function',
    signature: 'transferERC20(uint256,address,address,uint256)',
    encoding: '0x830ef41b',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'transferERC223',
    type: 'function',
    signature: 'transferERC223(uint256,address,address,uint256,bytes)',
    encoding: '0xd49d1bac',
    input_names: '_tokenId,_to,_erc223Contract,_value,_data,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferToParent',
    type: 'function',
    signature: 'transferToParent(address,address,uint256,uint256,bytes)',
    encoding: '0xf50acfa0',
    input_names: '_from,_toContract,_toTokenId,_tokenId,_data,'
  },
  {
    name: 'ReceivedChild',
    type: 'event',
    signature: 'ReceivedChild(address,uint256,address,uint256)',
    encoding: '0x0371ddf2288ad1ba92626a7e31c86a9d006e592cfe57d7d946ef08b13457c08b',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'ReceivedERC20',
    type: 'event',
    signature: 'ReceivedERC20(address,uint256,address,uint256)',
    encoding: '0x684ce28ace37552c6bfb98b7cceda8ed55327078eafb5dfb31218e0856382763',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'TransferChild',
    type: 'event',
    signature: 'TransferChild(uint256,address,address,uint256)',
    encoding: '0x0ef52e516fb5aec15a5d3587e5480481b702b26db93c8430eca78b61990fd3f6',
    input_names: 'tokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'TransferERC20',
    type: 'event',
    signature: 'TransferERC20(uint256,address,address,uint256)',
    encoding: '0xa8352277873fc0d2b233b8127433da351a4164fa701ed6ff79655694222932c4',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'authority',
    type: 'function',
    signature: 'authority()',
    encoding: '0xbf7e214f',
    output_names: 'val_0,'
  },
  {
    name: 'compute',
    type: 'function',
    signature: 'compute()',
    encoding: '0x1a43c338',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'indexes',
    type: 'function',
    signature: 'indexes(address)',
    encoding: '0x2db78d93',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'min',
    type: 'function',
    signature: 'min()',
    encoding: '0xf8897945',
    output_names: 'val_0,'
  },
  {
    name: 'next',
    type: 'function',
    signature: 'next()',
    encoding: '0x4c8fe526',
    output_names: 'val_0,'
  },
  {
    name: 'owner',
    type: 'function',
    signature: 'owner()',
    encoding: '0x8da5cb5b',
    output_names: 'val_0,'
  },
  {
    name: 'peek',
    type: 'function',
    signature: 'peek()',
    encoding: '0x59e02dd7',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke(bytes32)',
    encoding: '0x1504460f',
    input_names: 'val_0,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke()',
    encoding: '0x18178358'
  },
  {
    name: 'read',
    type: 'function',
    signature: 'read()',
    encoding: '0x57de26a4',
    output_names: 'val_0,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(address)',
    encoding: '0x2801617e',
    input_names: 'wat,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(bytes12,address)',
    encoding: '0xbeb38b43',
    input_names: 'pos,wat,'
  },
  {
    name: 'setAuthority',
    type: 'function',
    signature: 'setAuthority(address)',
    encoding: '0x7a9e5e4b',
    input_names: 'authority_,'
  },
  {
    name: 'setMin',
    type: 'function',
    signature: 'setMin(uint96)',
    encoding: '0x6ba5ef0d',
    input_names: 'min_,'
  },
  {
    name: 'setNext',
    type: 'function',
    signature: 'setNext(bytes12)',
    encoding: '0xf2c5925d',
    input_names: 'next_,'
  },
  {
    name: 'setOwner',
    type: 'function',
    signature: 'setOwner(address)',
    encoding: '0x13af4035',
    input_names: 'owner_,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(address)',
    encoding: '0x2966d1b9',
    input_names: 'wat,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(bytes12)',
    encoding: '0xe0a1fdad',
    input_names: 'pos,'
  },
  {
    name: 'values',
    type: 'function',
    signature: 'values(bytes12)',
    encoding: '0x651dd0de',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'void',
    type: 'function',
    signature: 'void()',
    encoding: '0xac4c25b2'
  },
  {
    name: 'LogNote',
    type: 'event',
    signature: 'LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)',
    encoding: '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31',
    input_names: 'sig,guy,foo,bar,wad,fax,'
  },
  {
    name: 'LogSetAuthority',
    type: 'event',
    signature: 'LogSetAuthority(address)',
    encoding: '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4',
    input_names: 'authority,'
  },
  {
    name: 'LogSetOwner',
    type: 'event',
    signature: 'LogSetOwner(address)',
    encoding: '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94',
    input_names: 'owner,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    name: '__default__',
    type: 'function',
    signature: '__default__()',
    encoding: '0x89402a72'
  },
  {
    name: 'addLiquidity',
    type: 'function',
    signature: 'addLiquidity(uint256,uint256,uint256)',
    encoding: '0x422f1043',
    input_names: 'min_liquidity,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'out,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'out,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'out,'
  },
  {
    name: 'decimals',
    type: 'function',
    signature: 'decimals()',
    encoding: '0x313ce567',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapInput',
    type: 'function',
    signature: 'ethToTokenSwapInput(uint256,uint256)',
    encoding: '0xf39b5b9b',
    input_names: 'min_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapOutput',
    type: 'function',
    signature: 'ethToTokenSwapOutput(uint256,uint256)',
    encoding: '0x6b1d4db7',
    input_names: 'tokens_bought,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferInput',
    type: 'function',
    signature: 'ethToTokenTransferInput(uint256,uint256,address)',
    encoding: '0xad65d76d',
    input_names: 'min_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferOutput',
    type: 'function',
    signature: 'ethToTokenTransferOutput(uint256,uint256,address)',
    encoding: '0x0b573638',
    input_names: 'tokens_bought,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'factoryAddress',
    type: 'function',
    signature: 'factoryAddress()',
    encoding: '0x966dae0e',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenInputPrice',
    type: 'function',
    signature: 'getEthToTokenInputPrice(uint256)',
    encoding: '0xcd7724c3',
    input_names: 'eth_sold,',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenOutputPrice',
    type: 'function',
    signature: 'getEthToTokenOutputPrice(uint256)',
    encoding: '0x59e94862',
    input_names: 'tokens_bought,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthInputPrice',
    type: 'function',
    signature: 'getTokenToEthInputPrice(uint256)',
    encoding: '0x95b68fe7',
    input_names: 'tokens_sold,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthOutputPrice',
    type: 'function',
    signature: 'getTokenToEthOutputPrice(uint256)',
    encoding: '0x2640f62c',
    input_names: 'eth_bought,',
    output_names: 'out,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'out,'
  },
  {
    name: 'removeLiquidity',
    type: 'function',
    signature: 'removeLiquidity(uint256,uint256,uint256,uint256)',
    encoding: '0xf88bf15a',
    input_names: 'amount,min_eth,min_tokens,deadline,',
    output_names: 'out,out,'
  },
  {
    name: 'setup',
    type: 'function',
    signature: 'setup(address)',
    encoding: '0x66d38203',
    input_names: 'token_addr,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'out,'
  },
  {
    name: 'tokenAddress',
    type: 'function',
    signature: 'tokenAddress()',
    encoding: '0x9d76ea58',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapInput',
    type: 'function',
    signature: 'tokenToEthSwapInput(uint256,uint256,uint256)',
    encoding: '0x95e3c50b',
    input_names: 'tokens_sold,min_eth,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapOutput',
    type: 'function',
    signature: 'tokenToEthSwapOutput(uint256,uint256,uint256)',
    encoding: '0x013efd8b',
    input_names: 'eth_bought,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferInput',
    type: 'function',
    signature: 'tokenToEthTransferInput(uint256,uint256,uint256,address)',
    encoding: '0x7237e031',
    input_names: 'tokens_sold,min_eth,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferOutput',
    type: 'function',
    signature: 'tokenToEthTransferOutput(uint256,uint256,uint256,address)',
    encoding: '0xd4e4841d',
    input_names: 'eth_bought,max_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapInput',
    type: 'function',
    signature: 'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb1cb43bf',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapOutput',
    type: 'function',
    signature: 'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xea650c7d',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferInput',
    type: 'function',
    signature: 'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xec384a3e',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferOutput',
    type: 'function',
    signature: 'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0x981a1327',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapInput',
    type: 'function',
    signature: 'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xddf7e1a7',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapOutput',
    type: 'function',
    signature: 'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb040d545',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferInput',
    type: 'function',
    signature: 'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf552d91b',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferOutput',
    type: 'function',
    signature: 'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf3c0efe9',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'out,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'AddLiquidity',
    type: 'event',
    signature: 'AddLiquidity(address,uint256,uint256)',
    encoding: '0x06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'EthPurchase',
    type: 'event',
    signature: 'EthPurchase(address,uint256,uint256)',
    encoding: '0x7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b353984238705',
    input_names: 'buyer,tokens_sold,eth_bought,'
  },
  {
    name: 'RemoveLiquidity',
    type: 'event',
    signature: 'RemoveLiquidity(address,uint256,uint256)',
    encoding: '0x0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e8',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'TokenPurchase',
    type: 'event',
    signature: 'TokenPurchase(address,uint256,uint256)',
    encoding: '0xcd60aa75dea3072fbc07ae6d7d856b5dc5f4eee88854f5b4abf7b680ef8bc50f',
    input_names: 'buyer,eth_sold,tokens_bought,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256,uint256)',
    encoding: '0xaf8342fe',
    input_names: '_owners,_required,_daylimit,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256)',
    encoding: '0xfcd52c14',
    input_names: '_owners,_required,'
  },
  {
    type: 'fallback',
    signature: '()',
    encoding: '0x861731d5'
  },
  {
    name: 'MAX_OWNER_COUNT',
    type: 'function',
    signature: 'MAX_OWNER_COUNT()',
    encoding: '0xd74f8edd',
    output_names: 'val_0,'
  },
  {
    name: 'addOwner',
    type: 'function',
    signature: 'addOwner(address)',
    encoding: '0x7065cb48',
    input_names: '_owner,'
  },
  {
    name: 'changeOwner',
    type: 'function',
    signature: 'changeOwner(address,address)',
    encoding: '0xf00d4b5d',
    input_names: '_from,_to,'
  },
  {
    name: 'changeRequirement',
    type: 'function',
    signature: 'changeRequirement(uint256)',
    encoding: '0xba51a6df',
    input_names: '_newRequired,'
  },
  {
    name: 'confirm',
    type: 'function',
    signature: 'confirm(bytes32)',
    encoding: '0x797af627',
    input_names: '_h,',
    output_names: 'val_0,'
  },
  {
    name: 'confirmTransaction',
    type: 'function',
    signature: 'confirmTransaction(uint256)',
    encoding: '0xc01a8c84',
    input_names: 'transactionId,'
  },
  {
    name: 'confirmations',
    type: 'function',
    signature: 'confirmations(uint256,address)',
    encoding: '0x3411c81c',
    input_names: 'val_0,val_1,',
    output_names: 'val_0,'
  },
  {
    name: 'execute',
    type: 'function',
    signature: 'execute(address,uint256,bytes)',
    encoding: '0xb61d27f6',
    input_names: '_to,_value,_data,',
    output_names: '_r,'
  },
  {
    name: 'executeTransaction',
    type: 'function',
    signature: 'executeTransaction(uint256)',
    encoding: '0xee22610b',
    input_names: 'transactionId,'
  },
  {
    name: 'getConfirmationCount',
    type: 'function',
    signature: 'getConfirmationCount(uint256)',
    encoding: '0x8b51d13f',
    input_names: 'transactionId,',
    output_names: 'count,'
  },
  {
    name: 'getConfirmations',
    type: 'function',
    signature: 'getConfirmations(uint256)',
    encoding: '0xb5dc40c3',
    input_names: 'transactionId,',
    output_names: '_confirmations,'
  },
  {
    name: 'getOwners',
    type: 'function',
    signature: 'getOwners()',
    encoding: '0xa0e67e2b',
    output_names: 'val_0,'
  },
  {
    name: 'getTransactionCount',
    type: 'function',
    signature: 'getTransactionCount(bool,bool)',
    encoding: '0x54741525',
    input_names: 'pending,executed,',
    output_names: 'count,'
  },
  {
    name: 'getTransactionIds',
    type: 'function',
    signature: 'getTransactionIds(uint256,uint256,bool,bool)',
    encoding: '0xa8abe69a',
    input_names: 'from,to,pending,executed,',
    output_names: '_transactionIds,'
  },
  {
    name: 'hasConfirmed',
    type: 'function',
    signature: 'hasConfirmed(bytes32,address)',
    encoding: '0xc2cf7326',
    input_names: '_operation,_owner,',
    output_names: 'val_0,'
  },
  {
    name: 'isConfirmed',
    type: 'function',
    signature: 'isConfirmed(uint256)',
    encoding: '0x784547a7',
    input_names: 'transactionId,',
    output_names: 'val_0,'
  },
  {
    name: 'isOwner',
    type: 'function',
    signature: 'isOwner(address)',
    encoding: '0x2f54bf6e',
    input_names: '_addr,',
    output_names: 'val_0,'
  },
  {
    name: 'kill',
    type: 'function',
    signature: 'kill(address)',
    encoding: '0xcbf0b0c0',
    input_names: '_to,'
  },
  {
    name: 'm_dailyLimit',
    type: 'function',
    signature: 'm_dailyLimit()',
    encoding: '0xf1736d86',
    output_names: 'val_0,'
  },
  {
    name: 'm_numOwners',
    type: 'function',
    signature: 'm_numOwners()',
    encoding: '0x4123cb6b',
    output_names: 'val_0,'
  },
  {
    name: 'm_required',
    type: 'function',
    signature: 'm_required()',
    encoding: '0x746c9171',
    output_names: 'val_0,'
  },
  {
    name: 'owners',
    type: 'function',
    signature: 'owners(uint256)',
    encoding: '0x025e7c27',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'removeOwner',
    type: 'function',
    signature: 'removeOwner(address)',
    encoding: '0x173825d9',
    input_names: '_owner,'
  },
  {
    name: 'replaceOwner',
    type: 'function',
    signature: 'replaceOwner(address,address)',
    encoding: '0xe20056e6',
    input_names: 'owner,newOwner,'
  },
  {
    name: 'required',
    type: 'function',
    signature: 'required()',
    encoding: '0xdc8452cd',
    output_names: 'val_0,'
  },
  {
    name: 'resetSpentToday',
    type: 'function',
    signature: 'resetSpentToday()',
    encoding: '0x5c52c2f5'
  },
  {
    name: 'revoke',
    type: 'function',
    signature: 'revoke(bytes32)',
    encoding: '0xb75c7dc6',
    input_names: '_operation,'
  },
  {
    name: 'revokeConfirmation',
    type: 'function',
    signature: 'revokeConfirmation(uint256)',
    encoding: '0x20ea8d86',
    input_names: 'transactionId,'
  },
  {
    name: 'setDailyLimit',
    type: 'function',
    signature: 'setDailyLimit(uint256)',
    encoding: '0xb20d30a9',
    input_names: '_newLimit,'
  },
  {
    name: 'submitTransaction',
    type: 'function',
    signature: 'submitTransaction(address,uint256,bytes)',
    encoding: '0xc6427474',
    input_names: 'destination,value,data,',
    output_names: 'transactionId,'
  },
  {
    name: 'transactionCount',
    type: 'function',
    signature: 'transactionCount()',
    encoding: '0xb77bf600',
    output_names: 'val_0,'
  },
  {
    name: 'transactions',
    type: 'function',
    signature: 'transactions(uint256)',
    encoding: '0x9ace38c2',
    input_names: 'val_0,',
    output_names: 'destination,value,data,executed,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,uint256)',
    encoding: '0x4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,bytes32)',
    encoding: '0xe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda',
    input_names: 'owner,operation,'
  },
  {
    name: 'ConfirmationNeeded',
    type: 'event',
    signature: 'ConfirmationNeeded(bytes32,address,uint256,address,bytes)',
    encoding: '0x1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32',
    input_names: 'operation,initiator,value,to,data,'
  },
  {
    name: 'Deposit',
    type: 'event',
    signature: 'Deposit(address,uint256)',
    encoding: '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c',
    input_names: 'from,value,'
  },
  {
    name: 'Execution',
    type: 'event',
    signature: 'Execution(uint256)',
    encoding: '0x33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed75',
    input_names: '_transactionId,'
  },
  {
    name: 'ExecutionFailure',
    type: 'event',
    signature: 'ExecutionFailure(uint256)',
    encoding: '0x526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b79236',
    input_names: '_transactionId,'
  },
  {
    name: 'MultiTransact',
    type: 'event',
    signature: 'MultiTransact(address,bytes32,uint256,address,bytes)',
    encoding: '0xe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a',
    input_names: 'owner,operation,value,to,data,'
  },
  {
    name: 'OwnerAdded',
    type: 'event',
    signature: 'OwnerAdded(address)',
    encoding: '0x994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3',
    input_names: 'newOwner,'
  },
  {
    name: 'OwnerAddition',
    type: 'event',
    signature: 'OwnerAddition(address)',
    encoding: '0xf39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d',
    input_names: '_owner,'
  },
  {
    name: 'OwnerChanged',
    type: 'event',
    signature: 'OwnerChanged(address,address)',
    encoding: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
    input_names: 'oldOwner,newOwner,'
  },
  {
    name: 'OwnerRemoval',
    type: 'event',
    signature: 'OwnerRemoval(address)',
    encoding: '0x8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b90',
    input_names: '_owner,'
  },
  {
    name: 'OwnerRemoved',
    type: 'event',
    signature: 'OwnerRemoved(address)',
    encoding: '0x58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da',
    input_names: 'oldOwner,'
  },
  {
    name: 'RequirementChange',
    type: 'event',
    signature: 'RequirementChange(uint256)',
    encoding: '0xa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a',
    input_names: '_required,'
  },
  {
    name: 'RequirementChanged',
    type: 'event',
    signature: 'RequirementChanged(uint256)',
    encoding: '0xacbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da',
    input_names: 'newRequirement,'
  },
  {
    name: 'Revocation',
    type: 'event',
    signature: 'Revocation(address,uint256)',
    encoding: '0xf6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e9',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Revoke',
    type: 'event',
    signature: 'Revoke(address,bytes32)',
    encoding: '0xc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b',
    input_names: 'owner,operation,'
  },
  {
    name: 'SingleTransact',
    type: 'event',
    signature: 'SingleTransact(address,uint256,address,bytes)',
    encoding: '0x92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd004',
    input_names: 'owner,value,to,data,'
  },
  {
    name: 'Submission',
    type: 'event',
    signature: 'Submission(uint256)',
    encoding: '0xc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e51',
    input_names: '_transactionId,'
  },
  {
    name: '_doSafeBatchTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)',
    encoding: '0xe51c223d',
    input_names: '_operator,_from,_to,_ids,_values,_data,'
  },
  {
    name: '_doSafeTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)',
    encoding: '0x084e9e24',
    input_names: '_operator,_from,_to,_id,_value,_data,'
  },
  {
    name: 'add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address,uint256)',
    encoding: '0x00fdd58e',
    input_names: '_owner,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfBatch',
    type: 'function',
    signature: 'balanceOfBatch(address[],uint256[])',
    encoding: '0x4e1273f4',
    input_names: '_owners,_ids,',
    output_names: 'memory,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(uint256,string)',
    encoding: '0x0118fa49',
    input_names: '_initialSupply,_uri,',
    output_names: '_id,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(string,bool)',
    encoding: '0xcc10e401',
    input_names: '_uri,_isNF,',
    output_names: '_type,'
  },
  {
    name: 'div',
    type: 'function',
    signature: 'div(uint256,uint256)',
    encoding: '0xa391c15b',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleBaseType',
    type: 'function',
    signature: 'getNonFungibleBaseType(uint256)',
    encoding: '0x6f969c2d',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleIndex',
    type: 'function',
    signature: 'getNonFungibleIndex(uint256)',
    encoding: '0x9cca1c64',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: 'account,',
    output_names: 'ret_0,'
  },
  {
    name: 'isFungible',
    type: 'function',
    signature: 'isFungible(uint256)',
    encoding: '0xadebf6f2',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungible',
    type: 'function',
    signature: 'isNonFungible(uint256)',
    encoding: '0xe44591f0',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleBaseType',
    type: 'function',
    signature: 'isNonFungibleBaseType(uint256)',
    encoding: '0x7269a327',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleItem',
    type: 'function',
    signature: 'isNonFungibleItem(uint256)',
    encoding: '0x5e81b958',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(uint256,address[],uint256[])',
    encoding: '0xcfa84fc1',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintFungible',
    type: 'function',
    signature: 'mintFungible(uint256,address[],uint256[])',
    encoding: '0x78b27221',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintNonFungible',
    type: 'function',
    signature: 'mintNonFungible(uint256,address[])',
    encoding: '0xf9419088',
    input_names: '_type,_to,'
  },
  {
    name: 'mul',
    type: 'function',
    signature: 'mul(uint256,uint256)',
    encoding: '0xc8a4ac9c',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'onERC1155BatchReceived',
    type: 'function',
    signature: 'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xbc197c81',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC1155Received',
    type: 'function',
    signature: 'onERC1155Received(address,address,uint256,uint256,bytes)',
    encoding: '0xf23a6e61',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXBatchReceived',
    type: 'function',
    signature: 'onERCXXXXBatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xe9e5be6a',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXReceived',
    type: 'function',
    signature: 'onERCXXXXReceived(address,address,uint256,uint256,bytes)',
    encoding: '0xeb510be8',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeBatchTransferFrom',
    type: 'function',
    signature: 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    encoding: '0x2eb2c2d6',
    input_names: '_from,_to,_ids,_values,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,uint256,bytes)',
    encoding: '0xf242432a',
    input_names: '_from,_to,_id,_value,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'setCompleted',
    type: 'function',
    signature: 'setCompleted(uint256)',
    encoding: '0xfdacd576',
    input_names: 'completed,'
  },
  {
    name: 'setShouldReject',
    type: 'function',
    signature: 'setShouldReject(bool)',
    encoding: '0xa175b638',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectClash',
    type: 'function',
    signature: 'setShouldRejectClash(bool)',
    encoding: '0x2090dd24',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectXXXX',
    type: 'function',
    signature: 'setShouldRejectXXXX(bool)',
    encoding: '0x80f5fe74',
    input_names: '_value,'
  },
  {
    name: 'setURI',
    type: 'function',
    signature: 'setURI(string,uint256)',
    encoding: '0x67db3b8f',
    input_names: '_uri,_id,'
  },
  {
    name: 'sub',
    type: 'function',
    signature: 'sub(uint256,uint256)',
    encoding: '0xb67d77c5',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'updateContract',
    type: 'function',
    signature: 'updateContract(address,string,string)',
    encoding: '0x61455567',
    input_names: '_delegate,_functionSignatures,_commitMessage,'
  },
  {
    name: 'upgrade',
    type: 'function',
    signature: 'upgrade(address)',
    encoding: '0x0900f010',
    input_names: 'new_address,'
  },
  {
    name: 'uri',
    type: 'function',
    signature: 'uri(uint256)',
    encoding: '0x0e89341c',
    input_names: '_id,',
    output_names: 'memory,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256,uint256,uint256)',
    encoding: '0x3a9c85c6b31f7a9d7fe1478f53e1be42e85db97ca30d1789cfef9196dbc472c9',
    input_names: '_owner,_spender,_id,_oldValue,_value,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'CommitMessage',
    type: 'event',
    signature: 'CommitMessage(string)',
    encoding: '0xaa1c0a0a78cec2470f9652e5d29540752e7a64d70f926933cebf13afaeda45de',
    input_names: 'message,'
  },
  {
    name: 'FunctionUpdate',
    type: 'event',
    signature: 'FunctionUpdate(bytes4,address,address,string)',
    encoding: '0x3234040ce3bd4564874e44810f198910133a1b24c4e84aac87edbf6b458f5353',
    input_names: 'functionId,oldDelegate,newDelegate,functionSignature,'
  },
  {
    name: 'TransferBatch',
    type: 'event',
    signature: 'TransferBatch(address,address,address,uint256[],uint256[])',
    encoding: '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
    input_names: '_operator,_from,_to,_ids,_values,'
  },
  {
    name: 'TransferSingle',
    type: 'event',
    signature: 'TransferSingle(address,address,address,uint256,uint256)',
    encoding: '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
    input_names: '_operator,_from,_to,_id,_value,'
  },
  {
    name: 'URI',
    type: 'event',
    signature: 'URI(string,uint256)',
    encoding: '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b',
    input_names: '_value,_id,'
  },
  {
    name: 'canTransfer',
    type: 'function',
    signature: 'canTransfer(address,uint256,bytes)',
    encoding: '0x1badb25c',
    input_names: '_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'canTransferFrom',
    type: 'function',
    signature: 'canTransferFrom(address,address,uint256,bytes)',
    encoding: '0x122eb575',
    input_names: '_from,_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'isIssuable',
    type: 'function',
    signature: 'isIssuable()',
    encoding: '0x2f1cae85',
    output_names: 'ret_0,'
  },
  {
    name: 'issue',
    type: 'function',
    signature: 'issue(address,uint256,bytes)',
    encoding: '0xbb3acde9',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'redeem',
    type: 'function',
    signature: 'redeem(uint256,bytes)',
    encoding: '0xe77c646d',
    input_names: '_value,_data,'
  },
  {
    name: 'redeemFrom',
    type: 'function',
    signature: 'redeemFrom(address,uint256,bytes)',
    encoding: '0x9675193c',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'transferFromWithData',
    type: 'function',
    signature: 'transferFromWithData(address,address,uint256,bytes)',
    encoding: '0xee532f31',
    input_names: '_from,_to,_value,_data,'
  },
  {
    name: 'transferWithData',
    type: 'function',
    signature: 'transferWithData(address,uint256,bytes)',
    encoding: '0x2535f762',
    input_names: '_to,_value,_data,'
  },
  {
    name: 'Issued',
    type: 'event',
    signature: 'Issued(address,address,uint256,bytes)',
    encoding: '0x0e9905d62635f049c2f4e11678ebf9dc3d1f8c4a653e290759b772e47ba00d00',
    input_names: '_operator,_to,_value,_data,'
  },
  {
    name: 'Redeemed',
    type: 'event',
    signature: 'Redeemed(address,address,uint256,bytes)',
    encoding: '0xb7d0d6b60740753e9f16692a2f479472a1385aec2420fa43225b02f2ffa1afe7',
    input_names: '_operator,_from,_value,_data,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'canImplementInterfaceForAddress',
    type: 'function',
    signature: 'canImplementInterfaceForAddress(bytes32,address)',
    encoding: '0x249cb3fa',
    input_names: 'interfaceHash,addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'getInterfaceImplementer',
    type: 'function',
    signature: 'getInterfaceImplementer(address,bytes32)',
    encoding: '0xaabbb8ca',
    input_names: '_addr,_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'getManager',
    type: 'function',
    signature: 'getManager(address)',
    encoding: '0x3d584063',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165Interface',
    type: 'function',
    signature: 'implementsERC165Interface(address,bytes4)',
    encoding: '0xf712f3e8',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165InterfaceNoCache',
    type: 'function',
    signature: 'implementsERC165InterfaceNoCache(address,bytes4)',
    encoding: '0xb7056765',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'interfaceHash',
    type: 'function',
    signature: 'interfaceHash(string)',
    encoding: '0x65ba36c1',
    input_names: '_interfaceName,',
    output_names: 'ret_0,'
  },
  {
    name: 'isERC165Interface',
    type: 'function',
    signature: 'isERC165Interface(bytes32)',
    encoding: '0x9d4cf268',
    input_names: '_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'noThrowCall',
    type: 'function',
    signature: 'noThrowCall(address,bytes4)',
    encoding: '0xf86cd33d',
    input_names: '_contract,_interfaceId,',
    output_names: 'success,result,'
  },
  {
    name: 'setInterfaceImplementer',
    type: 'function',
    signature: 'setInterfaceImplementer(address,bytes32,address)',
    encoding: '0x29965a1d',
    input_names: '_addr,_interfaceHash,_implementer,'
  },
  {
    name: 'setManager',
    type: 'function',
    signature: 'setManager(address,address)',
    encoding: '0x5df8122f',
    input_names: '_addr,_newManager,'
  },
  {
    name: 'updateERC165Cache',
    type: 'function',
    signature: 'updateERC165Cache(address,bytes4)',
    encoding: '0xa41e7d51',
    input_names: '_contract,_interfaceId,'
  },
  {
    name: 'InterfaceImplementerSet',
    type: 'event',
    signature: 'InterfaceImplementerSet(address,bytes32,address)',
    encoding: '0x93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db153',
    input_names: 'addr,interfaceHash,implementer,'
  },
  {
    name: 'ManagerChanged',
    type: 'event',
    signature: 'ManagerChanged(address,address)',
    encoding: '0x605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a4350',
    input_names: 'addr,newManager,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'ret_0,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: '_name,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_tokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: '_symbol,'
  },
  {
    name: 'tokenURI',
    type: 'function',
    signature: 'tokenURI(uint256)',
    encoding: '0xc87b56dd',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_approved,_tokenId,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'authorizeOperator',
    type: 'function',
    signature: 'authorizeOperator(address)',
    encoding: '0x959b8c3f',
    input_names: 'operator,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: 'holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'burn',
    type: 'function',
    signature: 'burn(uint256,bytes)',
    encoding: '0xfe9d9303',
    input_names: 'amount,data,'
  },
  {
    name: 'defaultOperators',
    type: 'function',
    signature: 'defaultOperators()',
    encoding: '0x06e48538',
    output_names: 'memory,'
  },
  {
    name: 'granularity',
    type: 'function',
    signature: 'granularity()',
    encoding: '0x556f0dc7',
    output_names: 'ret_0,'
  },
  {
    name: 'isOperatorFor',
    type: 'function',
    signature: 'isOperatorFor(address,address)',
    encoding: '0xd95b6371',
    input_names: 'operator,holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'memory,'
  },
  {
    name: 'operatorBurn',
    type: 'function',
    signature: 'operatorBurn(address,uint256,bytes,bytes)',
    encoding: '0xfc673c4f',
    input_names: 'from,amount,data,operatorData,'
  },
  {
    name: 'operatorSend',
    type: 'function',
    signature: 'operatorSend(address,address,uint256,bytes,bytes)',
    encoding: '0x62ad1b83',
    input_names: 'from,to,amount,data,operatorData,'
  },
  {
    name: 'revokeOperator',
    type: 'function',
    signature: 'revokeOperator(address)',
    encoding: '0xfad8b32a',
    input_names: 'operator,'
  },
  {
    name: 'send',
    type: 'function',
    signature: 'send(address,uint256,bytes)',
    encoding: '0x9bd9bbc6',
    input_names: 'to,amount,data,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'memory,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'ret_0,'
  },
  {
    name: 'AuthorizedOperator',
    type: 'event',
    signature: 'AuthorizedOperator(address,address)',
    encoding: '0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9',
    input_names: 'operator,holder,'
  },
  {
    name: 'Burned',
    type: 'event',
    signature: 'Burned(address,address,uint256,bytes,bytes)',
    encoding: '0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098',
    input_names: 'operator,from,amount,data,operatorData,'
  },
  {
    name: 'Minted',
    type: 'event',
    signature: 'Minted(address,address,uint256,bytes,bytes)',
    encoding: '0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d',
    input_names: 'operator,to,amount,data,operatorData,'
  },
  {
    name: 'RevokedOperator',
    type: 'event',
    signature: 'RevokedOperator(address,address)',
    encoding: '0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1',
    input_names: 'operator,holder,'
  },
  {
    name: 'Sent',
    type: 'event',
    signature: 'Sent(address,address,address,uint256,bytes,bytes)',
    encoding: '0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987',
    input_names: 'operator,from,to,amount,data,operatorData,'
  },
  {
    name: '_ownerOfChild',
    type: 'function',
    signature: '_ownerOfChild(address,uint256)',
    encoding: '0xa5aeb1d4',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: '_transferFrom',
    type: 'function',
    signature: '_transferFrom(address,address,uint256)',
    encoding: '0xcb712535',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'remaining,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_tokenOwner,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfERC20',
    type: 'function',
    signature: 'balanceOfERC20(uint256,address)',
    encoding: '0xe226ed22',
    input_names: '_tokenId,__erc20Contract,',
    output_names: 'ret_0,'
  },
  {
    name: 'childContractByIndex',
    type: 'function',
    signature: 'childContractByIndex(uint256,uint256)',
    encoding: '0x0d5a621b',
    input_names: '_tokenId,_index,',
    output_names: 'childContract,'
  },
  {
    name: 'childExists',
    type: 'function',
    signature: 'childExists(address,uint256)',
    encoding: '0x5680a3ad',
    input_names: '_childContract,_childTokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'childTokenByIndex',
    type: 'function',
    signature: 'childTokenByIndex(uint256,address,uint256)',
    encoding: '0x160b01a1',
    input_names: '_tokenId,_childContract,_index,',
    output_names: 'childTokenId,'
  },
  {
    name: 'erc20ContractByIndex',
    type: 'function',
    signature: 'erc20ContractByIndex(uint256,uint256)',
    encoding: '0x627c81ff',
    input_names: '_tokenId,_index,',
    output_names: 'ret_0,'
  },
  {
    name: 'erc20Received',
    type: 'function',
    signature: 'erc20Received(address,uint256,address,uint256)',
    encoding: '0x9e95670d',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'getChild',
    type: 'function',
    signature: 'getChild(address,uint256,address,uint256)',
    encoding: '0xba6b5f96',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'getERC20',
    type: 'function',
    signature: 'getERC20(address,uint256,address,uint256)',
    encoding: '0x07cff6f2',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(address)',
    encoding: '0x6a627842',
    input_names: '_to,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,uint256,bytes)',
    encoding: '0xf0b9e5ba',
    input_names: '_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'tokenOwner,'
  },
  {
    name: 'ownerOfChild',
    type: 'function',
    signature: 'ownerOfChild(address,uint256)',
    encoding: '0xeadb80b8',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: 'receiveChild',
    type: 'function',
    signature: 'receiveChild(address,uint256,address,uint256)',
    encoding: '0x597c255f',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeChild',
    type: 'function',
    signature: 'removeChild(uint256,address,uint256)',
    encoding: '0x0f0ba766',
    input_names: '_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeERC20',
    type: 'function',
    signature: 'removeERC20(uint256,address,uint256)',
    encoding: '0x9771ccc8',
    input_names: '_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'rootOwnerOf',
    type: 'function',
    signature: 'rootOwnerOf(uint256)',
    encoding: '0x43a61a8e',
    input_names: '_tokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'rootOwnerOfChild',
    type: 'function',
    signature: 'rootOwnerOfChild(address,uint256)',
    encoding: '0xed81cdda',
    input_names: '_childContract,_childTokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256)',
    encoding: '0x1d98f3c5',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256,bytes)',
    encoding: '0x8d81f51e',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'tokenFallback',
    type: 'function',
    signature: 'tokenFallback(address,uint256,bytes)',
    encoding: '0xc0ee0b8a',
    input_names: '_from,_value,_data,'
  },
  {
    name: 'totalChildContracts',
    type: 'function',
    signature: 'totalChildContracts(uint256)',
    encoding: '0x8da7d0b5',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalChildTokens',
    type: 'function',
    signature: 'totalChildTokens(uint256,address)',
    encoding: '0x35b21ceb',
    input_names: '_tokenId,_childContract,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalERC20Contracts',
    type: 'function',
    signature: 'totalERC20Contracts(uint256)',
    encoding: '0xa7811732',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: 'to,value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256,bytes)',
    encoding: '0xbe45fd62',
    input_names: 'to,value,data,',
    output_names: 'success,'
  },
  {
    name: 'transferChild',
    type: 'function',
    signature: 'transferChild(uint256,address,address,uint256)',
    encoding: '0xbef44f18',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'transferChildToParent',
    type: 'function',
    signature: 'transferChildToParent(uint256,address,uint256,address,uint256,bytes)',
    encoding: '0x08937f62',
    input_names: '_fromTokenId,_toContract,_toTokenId,_childContract,_childTokenId,_data,'
  },
  {
    name: 'transferERC20',
    type: 'function',
    signature: 'transferERC20(uint256,address,address,uint256)',
    encoding: '0x830ef41b',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'transferERC223',
    type: 'function',
    signature: 'transferERC223(uint256,address,address,uint256,bytes)',
    encoding: '0xd49d1bac',
    input_names: '_tokenId,_to,_erc223Contract,_value,_data,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferToParent',
    type: 'function',
    signature: 'transferToParent(address,address,uint256,uint256,bytes)',
    encoding: '0xf50acfa0',
    input_names: '_from,_toContract,_toTokenId,_tokenId,_data,'
  },
  {
    name: 'ReceivedChild',
    type: 'event',
    signature: 'ReceivedChild(address,uint256,address,uint256)',
    encoding: '0x0371ddf2288ad1ba92626a7e31c86a9d006e592cfe57d7d946ef08b13457c08b',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'ReceivedERC20',
    type: 'event',
    signature: 'ReceivedERC20(address,uint256,address,uint256)',
    encoding: '0x684ce28ace37552c6bfb98b7cceda8ed55327078eafb5dfb31218e0856382763',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'TransferChild',
    type: 'event',
    signature: 'TransferChild(uint256,address,address,uint256)',
    encoding: '0x0ef52e516fb5aec15a5d3587e5480481b702b26db93c8430eca78b61990fd3f6',
    input_names: 'tokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'TransferERC20',
    type: 'event',
    signature: 'TransferERC20(uint256,address,address,uint256)',
    encoding: '0xa8352277873fc0d2b233b8127433da351a4164fa701ed6ff79655694222932c4',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'authority',
    type: 'function',
    signature: 'authority()',
    encoding: '0xbf7e214f',
    output_names: 'val_0,'
  },
  {
    name: 'compute',
    type: 'function',
    signature: 'compute()',
    encoding: '0x1a43c338',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'indexes',
    type: 'function',
    signature: 'indexes(address)',
    encoding: '0x2db78d93',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'min',
    type: 'function',
    signature: 'min()',
    encoding: '0xf8897945',
    output_names: 'val_0,'
  },
  {
    name: 'next',
    type: 'function',
    signature: 'next()',
    encoding: '0x4c8fe526',
    output_names: 'val_0,'
  },
  {
    name: 'owner',
    type: 'function',
    signature: 'owner()',
    encoding: '0x8da5cb5b',
    output_names: 'val_0,'
  },
  {
    name: 'peek',
    type: 'function',
    signature: 'peek()',
    encoding: '0x59e02dd7',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke(bytes32)',
    encoding: '0x1504460f',
    input_names: 'val_0,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke()',
    encoding: '0x18178358'
  },
  {
    name: 'read',
    type: 'function',
    signature: 'read()',
    encoding: '0x57de26a4',
    output_names: 'val_0,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(address)',
    encoding: '0x2801617e',
    input_names: 'wat,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(bytes12,address)',
    encoding: '0xbeb38b43',
    input_names: 'pos,wat,'
  },
  {
    name: 'setAuthority',
    type: 'function',
    signature: 'setAuthority(address)',
    encoding: '0x7a9e5e4b',
    input_names: 'authority_,'
  },
  {
    name: 'setMin',
    type: 'function',
    signature: 'setMin(uint96)',
    encoding: '0x6ba5ef0d',
    input_names: 'min_,'
  },
  {
    name: 'setNext',
    type: 'function',
    signature: 'setNext(bytes12)',
    encoding: '0xf2c5925d',
    input_names: 'next_,'
  },
  {
    name: 'setOwner',
    type: 'function',
    signature: 'setOwner(address)',
    encoding: '0x13af4035',
    input_names: 'owner_,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(address)',
    encoding: '0x2966d1b9',
    input_names: 'wat,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(bytes12)',
    encoding: '0xe0a1fdad',
    input_names: 'pos,'
  },
  {
    name: 'values',
    type: 'function',
    signature: 'values(bytes12)',
    encoding: '0x651dd0de',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'void',
    type: 'function',
    signature: 'void()',
    encoding: '0xac4c25b2'
  },
  {
    name: 'LogNote',
    type: 'event',
    signature: 'LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)',
    encoding: '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31',
    input_names: 'sig,guy,foo,bar,wad,fax,'
  },
  {
    name: 'LogSetAuthority',
    type: 'event',
    signature: 'LogSetAuthority(address)',
    encoding: '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4',
    input_names: 'authority,'
  },
  {
    name: 'LogSetOwner',
    type: 'event',
    signature: 'LogSetOwner(address)',
    encoding: '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94',
    input_names: 'owner,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    name: '__default__',
    type: 'function',
    signature: '__default__()',
    encoding: '0x89402a72'
  },
  {
    name: 'addLiquidity',
    type: 'function',
    signature: 'addLiquidity(uint256,uint256,uint256)',
    encoding: '0x422f1043',
    input_names: 'min_liquidity,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'out,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'out,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'out,'
  },
  {
    name: 'decimals',
    type: 'function',
    signature: 'decimals()',
    encoding: '0x313ce567',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapInput',
    type: 'function',
    signature: 'ethToTokenSwapInput(uint256,uint256)',
    encoding: '0xf39b5b9b',
    input_names: 'min_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapOutput',
    type: 'function',
    signature: 'ethToTokenSwapOutput(uint256,uint256)',
    encoding: '0x6b1d4db7',
    input_names: 'tokens_bought,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferInput',
    type: 'function',
    signature: 'ethToTokenTransferInput(uint256,uint256,address)',
    encoding: '0xad65d76d',
    input_names: 'min_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferOutput',
    type: 'function',
    signature: 'ethToTokenTransferOutput(uint256,uint256,address)',
    encoding: '0x0b573638',
    input_names: 'tokens_bought,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'factoryAddress',
    type: 'function',
    signature: 'factoryAddress()',
    encoding: '0x966dae0e',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenInputPrice',
    type: 'function',
    signature: 'getEthToTokenInputPrice(uint256)',
    encoding: '0xcd7724c3',
    input_names: 'eth_sold,',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenOutputPrice',
    type: 'function',
    signature: 'getEthToTokenOutputPrice(uint256)',
    encoding: '0x59e94862',
    input_names: 'tokens_bought,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthInputPrice',
    type: 'function',
    signature: 'getTokenToEthInputPrice(uint256)',
    encoding: '0x95b68fe7',
    input_names: 'tokens_sold,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthOutputPrice',
    type: 'function',
    signature: 'getTokenToEthOutputPrice(uint256)',
    encoding: '0x2640f62c',
    input_names: 'eth_bought,',
    output_names: 'out,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'out,'
  },
  {
    name: 'removeLiquidity',
    type: 'function',
    signature: 'removeLiquidity(uint256,uint256,uint256,uint256)',
    encoding: '0xf88bf15a',
    input_names: 'amount,min_eth,min_tokens,deadline,',
    output_names: 'out,out,'
  },
  {
    name: 'setup',
    type: 'function',
    signature: 'setup(address)',
    encoding: '0x66d38203',
    input_names: 'token_addr,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'out,'
  },
  {
    name: 'tokenAddress',
    type: 'function',
    signature: 'tokenAddress()',
    encoding: '0x9d76ea58',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapInput',
    type: 'function',
    signature: 'tokenToEthSwapInput(uint256,uint256,uint256)',
    encoding: '0x95e3c50b',
    input_names: 'tokens_sold,min_eth,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapOutput',
    type: 'function',
    signature: 'tokenToEthSwapOutput(uint256,uint256,uint256)',
    encoding: '0x013efd8b',
    input_names: 'eth_bought,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferInput',
    type: 'function',
    signature: 'tokenToEthTransferInput(uint256,uint256,uint256,address)',
    encoding: '0x7237e031',
    input_names: 'tokens_sold,min_eth,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferOutput',
    type: 'function',
    signature: 'tokenToEthTransferOutput(uint256,uint256,uint256,address)',
    encoding: '0xd4e4841d',
    input_names: 'eth_bought,max_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapInput',
    type: 'function',
    signature: 'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb1cb43bf',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapOutput',
    type: 'function',
    signature: 'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xea650c7d',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferInput',
    type: 'function',
    signature: 'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xec384a3e',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferOutput',
    type: 'function',
    signature: 'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0x981a1327',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapInput',
    type: 'function',
    signature: 'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xddf7e1a7',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapOutput',
    type: 'function',
    signature: 'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb040d545',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferInput',
    type: 'function',
    signature: 'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf552d91b',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferOutput',
    type: 'function',
    signature: 'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf3c0efe9',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'out,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'AddLiquidity',
    type: 'event',
    signature: 'AddLiquidity(address,uint256,uint256)',
    encoding: '0x06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'EthPurchase',
    type: 'event',
    signature: 'EthPurchase(address,uint256,uint256)',
    encoding: '0x7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b353984238705',
    input_names: 'buyer,tokens_sold,eth_bought,'
  },
  {
    name: 'RemoveLiquidity',
    type: 'event',
    signature: 'RemoveLiquidity(address,uint256,uint256)',
    encoding: '0x0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e8',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'TokenPurchase',
    type: 'event',
    signature: 'TokenPurchase(address,uint256,uint256)',
    encoding: '0xcd60aa75dea3072fbc07ae6d7d856b5dc5f4eee88854f5b4abf7b680ef8bc50f',
    input_names: 'buyer,eth_sold,tokens_bought,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256,uint256)',
    encoding: '0xaf8342fe',
    input_names: '_owners,_required,_daylimit,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256)',
    encoding: '0xfcd52c14',
    input_names: '_owners,_required,'
  },
  {
    type: 'fallback',
    signature: '()',
    encoding: '0x861731d5'
  },
  {
    name: 'MAX_OWNER_COUNT',
    type: 'function',
    signature: 'MAX_OWNER_COUNT()',
    encoding: '0xd74f8edd',
    output_names: 'val_0,'
  },
  {
    name: 'addOwner',
    type: 'function',
    signature: 'addOwner(address)',
    encoding: '0x7065cb48',
    input_names: '_owner,'
  },
  {
    name: 'changeOwner',
    type: 'function',
    signature: 'changeOwner(address,address)',
    encoding: '0xf00d4b5d',
    input_names: '_from,_to,'
  },
  {
    name: 'changeRequirement',
    type: 'function',
    signature: 'changeRequirement(uint256)',
    encoding: '0xba51a6df',
    input_names: '_newRequired,'
  },
  {
    name: 'confirm',
    type: 'function',
    signature: 'confirm(bytes32)',
    encoding: '0x797af627',
    input_names: '_h,',
    output_names: 'val_0,'
  },
  {
    name: 'confirmTransaction',
    type: 'function',
    signature: 'confirmTransaction(uint256)',
    encoding: '0xc01a8c84',
    input_names: 'transactionId,'
  },
  {
    name: 'confirmations',
    type: 'function',
    signature: 'confirmations(uint256,address)',
    encoding: '0x3411c81c',
    input_names: 'val_0,val_1,',
    output_names: 'val_0,'
  },
  {
    name: 'execute',
    type: 'function',
    signature: 'execute(address,uint256,bytes)',
    encoding: '0xb61d27f6',
    input_names: '_to,_value,_data,',
    output_names: '_r,'
  },
  {
    name: 'executeTransaction',
    type: 'function',
    signature: 'executeTransaction(uint256)',
    encoding: '0xee22610b',
    input_names: 'transactionId,'
  },
  {
    name: 'getConfirmationCount',
    type: 'function',
    signature: 'getConfirmationCount(uint256)',
    encoding: '0x8b51d13f',
    input_names: 'transactionId,',
    output_names: 'count,'
  },
  {
    name: 'getConfirmations',
    type: 'function',
    signature: 'getConfirmations(uint256)',
    encoding: '0xb5dc40c3',
    input_names: 'transactionId,',
    output_names: '_confirmations,'
  },
  {
    name: 'getOwners',
    type: 'function',
    signature: 'getOwners()',
    encoding: '0xa0e67e2b',
    output_names: 'val_0,'
  },
  {
    name: 'getTransactionCount',
    type: 'function',
    signature: 'getTransactionCount(bool,bool)',
    encoding: '0x54741525',
    input_names: 'pending,executed,',
    output_names: 'count,'
  },
  {
    name: 'getTransactionIds',
    type: 'function',
    signature: 'getTransactionIds(uint256,uint256,bool,bool)',
    encoding: '0xa8abe69a',
    input_names: 'from,to,pending,executed,',
    output_names: '_transactionIds,'
  },
  {
    name: 'hasConfirmed',
    type: 'function',
    signature: 'hasConfirmed(bytes32,address)',
    encoding: '0xc2cf7326',
    input_names: '_operation,_owner,',
    output_names: 'val_0,'
  },
  {
    name: 'isConfirmed',
    type: 'function',
    signature: 'isConfirmed(uint256)',
    encoding: '0x784547a7',
    input_names: 'transactionId,',
    output_names: 'val_0,'
  },
  {
    name: 'isOwner',
    type: 'function',
    signature: 'isOwner(address)',
    encoding: '0x2f54bf6e',
    input_names: '_addr,',
    output_names: 'val_0,'
  },
  {
    name: 'kill',
    type: 'function',
    signature: 'kill(address)',
    encoding: '0xcbf0b0c0',
    input_names: '_to,'
  },
  {
    name: 'm_dailyLimit',
    type: 'function',
    signature: 'm_dailyLimit()',
    encoding: '0xf1736d86',
    output_names: 'val_0,'
  },
  {
    name: 'm_numOwners',
    type: 'function',
    signature: 'm_numOwners()',
    encoding: '0x4123cb6b',
    output_names: 'val_0,'
  },
  {
    name: 'm_required',
    type: 'function',
    signature: 'm_required()',
    encoding: '0x746c9171',
    output_names: 'val_0,'
  },
  {
    name: 'owners',
    type: 'function',
    signature: 'owners(uint256)',
    encoding: '0x025e7c27',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'removeOwner',
    type: 'function',
    signature: 'removeOwner(address)',
    encoding: '0x173825d9',
    input_names: '_owner,'
  },
  {
    name: 'replaceOwner',
    type: 'function',
    signature: 'replaceOwner(address,address)',
    encoding: '0xe20056e6',
    input_names: 'owner,newOwner,'
  },
  {
    name: 'required',
    type: 'function',
    signature: 'required()',
    encoding: '0xdc8452cd',
    output_names: 'val_0,'
  },
  {
    name: 'resetSpentToday',
    type: 'function',
    signature: 'resetSpentToday()',
    encoding: '0x5c52c2f5'
  },
  {
    name: 'revoke',
    type: 'function',
    signature: 'revoke(bytes32)',
    encoding: '0xb75c7dc6',
    input_names: '_operation,'
  },
  {
    name: 'revokeConfirmation',
    type: 'function',
    signature: 'revokeConfirmation(uint256)',
    encoding: '0x20ea8d86',
    input_names: 'transactionId,'
  },
  {
    name: 'setDailyLimit',
    type: 'function',
    signature: 'setDailyLimit(uint256)',
    encoding: '0xb20d30a9',
    input_names: '_newLimit,'
  },
  {
    name: 'submitTransaction',
    type: 'function',
    signature: 'submitTransaction(address,uint256,bytes)',
    encoding: '0xc6427474',
    input_names: 'destination,value,data,',
    output_names: 'transactionId,'
  },
  {
    name: 'transactionCount',
    type: 'function',
    signature: 'transactionCount()',
    encoding: '0xb77bf600',
    output_names: 'val_0,'
  },
  {
    name: 'transactions',
    type: 'function',
    signature: 'transactions(uint256)',
    encoding: '0x9ace38c2',
    input_names: 'val_0,',
    output_names: 'destination,value,data,executed,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,uint256)',
    encoding: '0x4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,bytes32)',
    encoding: '0xe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda',
    input_names: 'owner,operation,'
  },
  {
    name: 'ConfirmationNeeded',
    type: 'event',
    signature: 'ConfirmationNeeded(bytes32,address,uint256,address,bytes)',
    encoding: '0x1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32',
    input_names: 'operation,initiator,value,to,data,'
  },
  {
    name: 'Deposit',
    type: 'event',
    signature: 'Deposit(address,uint256)',
    encoding: '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c',
    input_names: 'from,value,'
  },
  {
    name: 'Execution',
    type: 'event',
    signature: 'Execution(uint256)',
    encoding: '0x33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed75',
    input_names: '_transactionId,'
  },
  {
    name: 'ExecutionFailure',
    type: 'event',
    signature: 'ExecutionFailure(uint256)',
    encoding: '0x526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b79236',
    input_names: '_transactionId,'
  },
  {
    name: 'MultiTransact',
    type: 'event',
    signature: 'MultiTransact(address,bytes32,uint256,address,bytes)',
    encoding: '0xe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a',
    input_names: 'owner,operation,value,to,data,'
  },
  {
    name: 'OwnerAdded',
    type: 'event',
    signature: 'OwnerAdded(address)',
    encoding: '0x994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3',
    input_names: 'newOwner,'
  },
  {
    name: 'OwnerAddition',
    type: 'event',
    signature: 'OwnerAddition(address)',
    encoding: '0xf39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d',
    input_names: '_owner,'
  },
  {
    name: 'OwnerChanged',
    type: 'event',
    signature: 'OwnerChanged(address,address)',
    encoding: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
    input_names: 'oldOwner,newOwner,'
  },
  {
    name: 'OwnerRemoval',
    type: 'event',
    signature: 'OwnerRemoval(address)',
    encoding: '0x8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b90',
    input_names: '_owner,'
  },
  {
    name: 'OwnerRemoved',
    type: 'event',
    signature: 'OwnerRemoved(address)',
    encoding: '0x58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da',
    input_names: 'oldOwner,'
  },
  {
    name: 'RequirementChange',
    type: 'event',
    signature: 'RequirementChange(uint256)',
    encoding: '0xa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a',
    input_names: '_required,'
  },
  {
    name: 'RequirementChanged',
    type: 'event',
    signature: 'RequirementChanged(uint256)',
    encoding: '0xacbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da',
    input_names: 'newRequirement,'
  },
  {
    name: 'Revocation',
    type: 'event',
    signature: 'Revocation(address,uint256)',
    encoding: '0xf6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e9',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Revoke',
    type: 'event',
    signature: 'Revoke(address,bytes32)',
    encoding: '0xc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b',
    input_names: 'owner,operation,'
  },
  {
    name: 'SingleTransact',
    type: 'event',
    signature: 'SingleTransact(address,uint256,address,bytes)',
    encoding: '0x92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd004',
    input_names: 'owner,value,to,data,'
  },
  {
    name: 'Submission',
    type: 'event',
    signature: 'Submission(uint256)',
    encoding: '0xc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e51',
    input_names: '_transactionId,'
  },
  {
    name: '_doSafeBatchTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)',
    encoding: '0xe51c223d',
    input_names: '_operator,_from,_to,_ids,_values,_data,'
  },
  {
    name: '_doSafeTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)',
    encoding: '0x084e9e24',
    input_names: '_operator,_from,_to,_id,_value,_data,'
  },
  {
    name: 'add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address,uint256)',
    encoding: '0x00fdd58e',
    input_names: '_owner,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfBatch',
    type: 'function',
    signature: 'balanceOfBatch(address[],uint256[])',
    encoding: '0x4e1273f4',
    input_names: '_owners,_ids,',
    output_names: 'memory,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(uint256,string)',
    encoding: '0x0118fa49',
    input_names: '_initialSupply,_uri,',
    output_names: '_id,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(string,bool)',
    encoding: '0xcc10e401',
    input_names: '_uri,_isNF,',
    output_names: '_type,'
  },
  {
    name: 'div',
    type: 'function',
    signature: 'div(uint256,uint256)',
    encoding: '0xa391c15b',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleBaseType',
    type: 'function',
    signature: 'getNonFungibleBaseType(uint256)',
    encoding: '0x6f969c2d',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleIndex',
    type: 'function',
    signature: 'getNonFungibleIndex(uint256)',
    encoding: '0x9cca1c64',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: 'account,',
    output_names: 'ret_0,'
  },
  {
    name: 'isFungible',
    type: 'function',
    signature: 'isFungible(uint256)',
    encoding: '0xadebf6f2',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungible',
    type: 'function',
    signature: 'isNonFungible(uint256)',
    encoding: '0xe44591f0',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleBaseType',
    type: 'function',
    signature: 'isNonFungibleBaseType(uint256)',
    encoding: '0x7269a327',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleItem',
    type: 'function',
    signature: 'isNonFungibleItem(uint256)',
    encoding: '0x5e81b958',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(uint256,address[],uint256[])',
    encoding: '0xcfa84fc1',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintFungible',
    type: 'function',
    signature: 'mintFungible(uint256,address[],uint256[])',
    encoding: '0x78b27221',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintNonFungible',
    type: 'function',
    signature: 'mintNonFungible(uint256,address[])',
    encoding: '0xf9419088',
    input_names: '_type,_to,'
  },
  {
    name: 'mul',
    type: 'function',
    signature: 'mul(uint256,uint256)',
    encoding: '0xc8a4ac9c',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'onERC1155BatchReceived',
    type: 'function',
    signature: 'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xbc197c81',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC1155Received',
    type: 'function',
    signature: 'onERC1155Received(address,address,uint256,uint256,bytes)',
    encoding: '0xf23a6e61',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXBatchReceived',
    type: 'function',
    signature: 'onERCXXXXBatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xe9e5be6a',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXReceived',
    type: 'function',
    signature: 'onERCXXXXReceived(address,address,uint256,uint256,bytes)',
    encoding: '0xeb510be8',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeBatchTransferFrom',
    type: 'function',
    signature: 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    encoding: '0x2eb2c2d6',
    input_names: '_from,_to,_ids,_values,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,uint256,bytes)',
    encoding: '0xf242432a',
    input_names: '_from,_to,_id,_value,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'setCompleted',
    type: 'function',
    signature: 'setCompleted(uint256)',
    encoding: '0xfdacd576',
    input_names: 'completed,'
  },
  {
    name: 'setShouldReject',
    type: 'function',
    signature: 'setShouldReject(bool)',
    encoding: '0xa175b638',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectClash',
    type: 'function',
    signature: 'setShouldRejectClash(bool)',
    encoding: '0x2090dd24',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectXXXX',
    type: 'function',
    signature: 'setShouldRejectXXXX(bool)',
    encoding: '0x80f5fe74',
    input_names: '_value,'
  },
  {
    name: 'setURI',
    type: 'function',
    signature: 'setURI(string,uint256)',
    encoding: '0x67db3b8f',
    input_names: '_uri,_id,'
  },
  {
    name: 'sub',
    type: 'function',
    signature: 'sub(uint256,uint256)',
    encoding: '0xb67d77c5',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'updateContract',
    type: 'function',
    signature: 'updateContract(address,string,string)',
    encoding: '0x61455567',
    input_names: '_delegate,_functionSignatures,_commitMessage,'
  },
  {
    name: 'upgrade',
    type: 'function',
    signature: 'upgrade(address)',
    encoding: '0x0900f010',
    input_names: 'new_address,'
  },
  {
    name: 'uri',
    type: 'function',
    signature: 'uri(uint256)',
    encoding: '0x0e89341c',
    input_names: '_id,',
    output_names: 'memory,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256,uint256,uint256)',
    encoding: '0x3a9c85c6b31f7a9d7fe1478f53e1be42e85db97ca30d1789cfef9196dbc472c9',
    input_names: '_owner,_spender,_id,_oldValue,_value,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'CommitMessage',
    type: 'event',
    signature: 'CommitMessage(string)',
    encoding: '0xaa1c0a0a78cec2470f9652e5d29540752e7a64d70f926933cebf13afaeda45de',
    input_names: 'message,'
  },
  {
    name: 'FunctionUpdate',
    type: 'event',
    signature: 'FunctionUpdate(bytes4,address,address,string)',
    encoding: '0x3234040ce3bd4564874e44810f198910133a1b24c4e84aac87edbf6b458f5353',
    input_names: 'functionId,oldDelegate,newDelegate,functionSignature,'
  },
  {
    name: 'TransferBatch',
    type: 'event',
    signature: 'TransferBatch(address,address,address,uint256[],uint256[])',
    encoding: '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
    input_names: '_operator,_from,_to,_ids,_values,'
  },
  {
    name: 'TransferSingle',
    type: 'event',
    signature: 'TransferSingle(address,address,address,uint256,uint256)',
    encoding: '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
    input_names: '_operator,_from,_to,_id,_value,'
  },
  {
    name: 'URI',
    type: 'event',
    signature: 'URI(string,uint256)',
    encoding: '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b',
    input_names: '_value,_id,'
  },
  {
    name: 'canTransfer',
    type: 'function',
    signature: 'canTransfer(address,uint256,bytes)',
    encoding: '0x1badb25c',
    input_names: '_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'canTransferFrom',
    type: 'function',
    signature: 'canTransferFrom(address,address,uint256,bytes)',
    encoding: '0x122eb575',
    input_names: '_from,_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'isIssuable',
    type: 'function',
    signature: 'isIssuable()',
    encoding: '0x2f1cae85',
    output_names: 'ret_0,'
  },
  {
    name: 'issue',
    type: 'function',
    signature: 'issue(address,uint256,bytes)',
    encoding: '0xbb3acde9',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'redeem',
    type: 'function',
    signature: 'redeem(uint256,bytes)',
    encoding: '0xe77c646d',
    input_names: '_value,_data,'
  },
  {
    name: 'redeemFrom',
    type: 'function',
    signature: 'redeemFrom(address,uint256,bytes)',
    encoding: '0x9675193c',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'transferFromWithData',
    type: 'function',
    signature: 'transferFromWithData(address,address,uint256,bytes)',
    encoding: '0xee532f31',
    input_names: '_from,_to,_value,_data,'
  },
  {
    name: 'transferWithData',
    type: 'function',
    signature: 'transferWithData(address,uint256,bytes)',
    encoding: '0x2535f762',
    input_names: '_to,_value,_data,'
  },
  {
    name: 'Issued',
    type: 'event',
    signature: 'Issued(address,address,uint256,bytes)',
    encoding: '0x0e9905d62635f049c2f4e11678ebf9dc3d1f8c4a653e290759b772e47ba00d00',
    input_names: '_operator,_to,_value,_data,'
  },
  {
    name: 'Redeemed',
    type: 'event',
    signature: 'Redeemed(address,address,uint256,bytes)',
    encoding: '0xb7d0d6b60740753e9f16692a2f479472a1385aec2420fa43225b02f2ffa1afe7',
    input_names: '_operator,_from,_value,_data,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'canImplementInterfaceForAddress',
    type: 'function',
    signature: 'canImplementInterfaceForAddress(bytes32,address)',
    encoding: '0x249cb3fa',
    input_names: 'interfaceHash,addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'getInterfaceImplementer',
    type: 'function',
    signature: 'getInterfaceImplementer(address,bytes32)',
    encoding: '0xaabbb8ca',
    input_names: '_addr,_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'getManager',
    type: 'function',
    signature: 'getManager(address)',
    encoding: '0x3d584063',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165Interface',
    type: 'function',
    signature: 'implementsERC165Interface(address,bytes4)',
    encoding: '0xf712f3e8',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165InterfaceNoCache',
    type: 'function',
    signature: 'implementsERC165InterfaceNoCache(address,bytes4)',
    encoding: '0xb7056765',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'interfaceHash',
    type: 'function',
    signature: 'interfaceHash(string)',
    encoding: '0x65ba36c1',
    input_names: '_interfaceName,',
    output_names: 'ret_0,'
  },
  {
    name: 'isERC165Interface',
    type: 'function',
    signature: 'isERC165Interface(bytes32)',
    encoding: '0x9d4cf268',
    input_names: '_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'noThrowCall',
    type: 'function',
    signature: 'noThrowCall(address,bytes4)',
    encoding: '0xf86cd33d',
    input_names: '_contract,_interfaceId,',
    output_names: 'success,result,'
  },
  {
    name: 'setInterfaceImplementer',
    type: 'function',
    signature: 'setInterfaceImplementer(address,bytes32,address)',
    encoding: '0x29965a1d',
    input_names: '_addr,_interfaceHash,_implementer,'
  },
  {
    name: 'setManager',
    type: 'function',
    signature: 'setManager(address,address)',
    encoding: '0x5df8122f',
    input_names: '_addr,_newManager,'
  },
  {
    name: 'updateERC165Cache',
    type: 'function',
    signature: 'updateERC165Cache(address,bytes4)',
    encoding: '0xa41e7d51',
    input_names: '_contract,_interfaceId,'
  },
  {
    name: 'InterfaceImplementerSet',
    type: 'event',
    signature: 'InterfaceImplementerSet(address,bytes32,address)',
    encoding: '0x93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db153',
    input_names: 'addr,interfaceHash,implementer,'
  },
  {
    name: 'ManagerChanged',
    type: 'event',
    signature: 'ManagerChanged(address,address)',
    encoding: '0x605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a4350',
    input_names: 'addr,newManager,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'ret_0,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: '_name,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_tokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: '_symbol,'
  },
  {
    name: 'tokenURI',
    type: 'function',
    signature: 'tokenURI(uint256)',
    encoding: '0xc87b56dd',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_approved,_tokenId,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'authorizeOperator',
    type: 'function',
    signature: 'authorizeOperator(address)',
    encoding: '0x959b8c3f',
    input_names: 'operator,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: 'holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'burn',
    type: 'function',
    signature: 'burn(uint256,bytes)',
    encoding: '0xfe9d9303',
    input_names: 'amount,data,'
  },
  {
    name: 'defaultOperators',
    type: 'function',
    signature: 'defaultOperators()',
    encoding: '0x06e48538',
    output_names: 'memory,'
  },
  {
    name: 'granularity',
    type: 'function',
    signature: 'granularity()',
    encoding: '0x556f0dc7',
    output_names: 'ret_0,'
  },
  {
    name: 'isOperatorFor',
    type: 'function',
    signature: 'isOperatorFor(address,address)',
    encoding: '0xd95b6371',
    input_names: 'operator,holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'memory,'
  },
  {
    name: 'operatorBurn',
    type: 'function',
    signature: 'operatorBurn(address,uint256,bytes,bytes)',
    encoding: '0xfc673c4f',
    input_names: 'from,amount,data,operatorData,'
  },
  {
    name: 'operatorSend',
    type: 'function',
    signature: 'operatorSend(address,address,uint256,bytes,bytes)',
    encoding: '0x62ad1b83',
    input_names: 'from,to,amount,data,operatorData,'
  },
  {
    name: 'revokeOperator',
    type: 'function',
    signature: 'revokeOperator(address)',
    encoding: '0xfad8b32a',
    input_names: 'operator,'
  },
  {
    name: 'send',
    type: 'function',
    signature: 'send(address,uint256,bytes)',
    encoding: '0x9bd9bbc6',
    input_names: 'to,amount,data,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'memory,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'ret_0,'
  },
  {
    name: 'AuthorizedOperator',
    type: 'event',
    signature: 'AuthorizedOperator(address,address)',
    encoding: '0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9',
    input_names: 'operator,holder,'
  },
  {
    name: 'Burned',
    type: 'event',
    signature: 'Burned(address,address,uint256,bytes,bytes)',
    encoding: '0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098',
    input_names: 'operator,from,amount,data,operatorData,'
  },
  {
    name: 'Minted',
    type: 'event',
    signature: 'Minted(address,address,uint256,bytes,bytes)',
    encoding: '0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d',
    input_names: 'operator,to,amount,data,operatorData,'
  },
  {
    name: 'RevokedOperator',
    type: 'event',
    signature: 'RevokedOperator(address,address)',
    encoding: '0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1',
    input_names: 'operator,holder,'
  },
  {
    name: 'Sent',
    type: 'event',
    signature: 'Sent(address,address,address,uint256,bytes,bytes)',
    encoding: '0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987',
    input_names: 'operator,from,to,amount,data,operatorData,'
  },
  {
    name: '_ownerOfChild',
    type: 'function',
    signature: '_ownerOfChild(address,uint256)',
    encoding: '0xa5aeb1d4',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: '_transferFrom',
    type: 'function',
    signature: '_transferFrom(address,address,uint256)',
    encoding: '0xcb712535',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'remaining,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_tokenOwner,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfERC20',
    type: 'function',
    signature: 'balanceOfERC20(uint256,address)',
    encoding: '0xe226ed22',
    input_names: '_tokenId,__erc20Contract,',
    output_names: 'ret_0,'
  },
  {
    name: 'childContractByIndex',
    type: 'function',
    signature: 'childContractByIndex(uint256,uint256)',
    encoding: '0x0d5a621b',
    input_names: '_tokenId,_index,',
    output_names: 'childContract,'
  },
  {
    name: 'childExists',
    type: 'function',
    signature: 'childExists(address,uint256)',
    encoding: '0x5680a3ad',
    input_names: '_childContract,_childTokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'childTokenByIndex',
    type: 'function',
    signature: 'childTokenByIndex(uint256,address,uint256)',
    encoding: '0x160b01a1',
    input_names: '_tokenId,_childContract,_index,',
    output_names: 'childTokenId,'
  },
  {
    name: 'erc20ContractByIndex',
    type: 'function',
    signature: 'erc20ContractByIndex(uint256,uint256)',
    encoding: '0x627c81ff',
    input_names: '_tokenId,_index,',
    output_names: 'ret_0,'
  },
  {
    name: 'erc20Received',
    type: 'function',
    signature: 'erc20Received(address,uint256,address,uint256)',
    encoding: '0x9e95670d',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'getChild',
    type: 'function',
    signature: 'getChild(address,uint256,address,uint256)',
    encoding: '0xba6b5f96',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'getERC20',
    type: 'function',
    signature: 'getERC20(address,uint256,address,uint256)',
    encoding: '0x07cff6f2',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(address)',
    encoding: '0x6a627842',
    input_names: '_to,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,uint256,bytes)',
    encoding: '0xf0b9e5ba',
    input_names: '_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'tokenOwner,'
  },
  {
    name: 'ownerOfChild',
    type: 'function',
    signature: 'ownerOfChild(address,uint256)',
    encoding: '0xeadb80b8',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: 'receiveChild',
    type: 'function',
    signature: 'receiveChild(address,uint256,address,uint256)',
    encoding: '0x597c255f',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeChild',
    type: 'function',
    signature: 'removeChild(uint256,address,uint256)',
    encoding: '0x0f0ba766',
    input_names: '_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeERC20',
    type: 'function',
    signature: 'removeERC20(uint256,address,uint256)',
    encoding: '0x9771ccc8',
    input_names: '_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'rootOwnerOf',
    type: 'function',
    signature: 'rootOwnerOf(uint256)',
    encoding: '0x43a61a8e',
    input_names: '_tokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'rootOwnerOfChild',
    type: 'function',
    signature: 'rootOwnerOfChild(address,uint256)',
    encoding: '0xed81cdda',
    input_names: '_childContract,_childTokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256)',
    encoding: '0x1d98f3c5',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256,bytes)',
    encoding: '0x8d81f51e',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'tokenFallback',
    type: 'function',
    signature: 'tokenFallback(address,uint256,bytes)',
    encoding: '0xc0ee0b8a',
    input_names: '_from,_value,_data,'
  },
  {
    name: 'totalChildContracts',
    type: 'function',
    signature: 'totalChildContracts(uint256)',
    encoding: '0x8da7d0b5',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalChildTokens',
    type: 'function',
    signature: 'totalChildTokens(uint256,address)',
    encoding: '0x35b21ceb',
    input_names: '_tokenId,_childContract,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalERC20Contracts',
    type: 'function',
    signature: 'totalERC20Contracts(uint256)',
    encoding: '0xa7811732',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: 'to,value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256,bytes)',
    encoding: '0xbe45fd62',
    input_names: 'to,value,data,',
    output_names: 'success,'
  },
  {
    name: 'transferChild',
    type: 'function',
    signature: 'transferChild(uint256,address,address,uint256)',
    encoding: '0xbef44f18',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'transferChildToParent',
    type: 'function',
    signature: 'transferChildToParent(uint256,address,uint256,address,uint256,bytes)',
    encoding: '0x08937f62',
    input_names: '_fromTokenId,_toContract,_toTokenId,_childContract,_childTokenId,_data,'
  },
  {
    name: 'transferERC20',
    type: 'function',
    signature: 'transferERC20(uint256,address,address,uint256)',
    encoding: '0x830ef41b',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'transferERC223',
    type: 'function',
    signature: 'transferERC223(uint256,address,address,uint256,bytes)',
    encoding: '0xd49d1bac',
    input_names: '_tokenId,_to,_erc223Contract,_value,_data,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferToParent',
    type: 'function',
    signature: 'transferToParent(address,address,uint256,uint256,bytes)',
    encoding: '0xf50acfa0',
    input_names: '_from,_toContract,_toTokenId,_tokenId,_data,'
  },
  {
    name: 'ReceivedChild',
    type: 'event',
    signature: 'ReceivedChild(address,uint256,address,uint256)',
    encoding: '0x0371ddf2288ad1ba92626a7e31c86a9d006e592cfe57d7d946ef08b13457c08b',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'ReceivedERC20',
    type: 'event',
    signature: 'ReceivedERC20(address,uint256,address,uint256)',
    encoding: '0x684ce28ace37552c6bfb98b7cceda8ed55327078eafb5dfb31218e0856382763',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'TransferChild',
    type: 'event',
    signature: 'TransferChild(uint256,address,address,uint256)',
    encoding: '0x0ef52e516fb5aec15a5d3587e5480481b702b26db93c8430eca78b61990fd3f6',
    input_names: 'tokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'TransferERC20',
    type: 'event',
    signature: 'TransferERC20(uint256,address,address,uint256)',
    encoding: '0xa8352277873fc0d2b233b8127433da351a4164fa701ed6ff79655694222932c4',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'authority',
    type: 'function',
    signature: 'authority()',
    encoding: '0xbf7e214f',
    output_names: 'val_0,'
  },
  {
    name: 'compute',
    type: 'function',
    signature: 'compute()',
    encoding: '0x1a43c338',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'indexes',
    type: 'function',
    signature: 'indexes(address)',
    encoding: '0x2db78d93',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'min',
    type: 'function',
    signature: 'min()',
    encoding: '0xf8897945',
    output_names: 'val_0,'
  },
  {
    name: 'next',
    type: 'function',
    signature: 'next()',
    encoding: '0x4c8fe526',
    output_names: 'val_0,'
  },
  {
    name: 'owner',
    type: 'function',
    signature: 'owner()',
    encoding: '0x8da5cb5b',
    output_names: 'val_0,'
  },
  {
    name: 'peek',
    type: 'function',
    signature: 'peek()',
    encoding: '0x59e02dd7',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke(bytes32)',
    encoding: '0x1504460f',
    input_names: 'val_0,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke()',
    encoding: '0x18178358'
  },
  {
    name: 'read',
    type: 'function',
    signature: 'read()',
    encoding: '0x57de26a4',
    output_names: 'val_0,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(address)',
    encoding: '0x2801617e',
    input_names: 'wat,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(bytes12,address)',
    encoding: '0xbeb38b43',
    input_names: 'pos,wat,'
  },
  {
    name: 'setAuthority',
    type: 'function',
    signature: 'setAuthority(address)',
    encoding: '0x7a9e5e4b',
    input_names: 'authority_,'
  },
  {
    name: 'setMin',
    type: 'function',
    signature: 'setMin(uint96)',
    encoding: '0x6ba5ef0d',
    input_names: 'min_,'
  },
  {
    name: 'setNext',
    type: 'function',
    signature: 'setNext(bytes12)',
    encoding: '0xf2c5925d',
    input_names: 'next_,'
  },
  {
    name: 'setOwner',
    type: 'function',
    signature: 'setOwner(address)',
    encoding: '0x13af4035',
    input_names: 'owner_,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(address)',
    encoding: '0x2966d1b9',
    input_names: 'wat,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(bytes12)',
    encoding: '0xe0a1fdad',
    input_names: 'pos,'
  },
  {
    name: 'values',
    type: 'function',
    signature: 'values(bytes12)',
    encoding: '0x651dd0de',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'void',
    type: 'function',
    signature: 'void()',
    encoding: '0xac4c25b2'
  },
  {
    name: 'LogNote',
    type: 'event',
    signature: 'LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)',
    encoding: '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31',
    input_names: 'sig,guy,foo,bar,wad,fax,'
  },
  {
    name: 'LogSetAuthority',
    type: 'event',
    signature: 'LogSetAuthority(address)',
    encoding: '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4',
    input_names: 'authority,'
  },
  {
    name: 'LogSetOwner',
    type: 'event',
    signature: 'LogSetOwner(address)',
    encoding: '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94',
    input_names: 'owner,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    name: '__default__',
    type: 'function',
    signature: '__default__()',
    encoding: '0x89402a72'
  },
  {
    name: 'addLiquidity',
    type: 'function',
    signature: 'addLiquidity(uint256,uint256,uint256)',
    encoding: '0x422f1043',
    input_names: 'min_liquidity,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'out,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'out,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'out,'
  },
  {
    name: 'decimals',
    type: 'function',
    signature: 'decimals()',
    encoding: '0x313ce567',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapInput',
    type: 'function',
    signature: 'ethToTokenSwapInput(uint256,uint256)',
    encoding: '0xf39b5b9b',
    input_names: 'min_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapOutput',
    type: 'function',
    signature: 'ethToTokenSwapOutput(uint256,uint256)',
    encoding: '0x6b1d4db7',
    input_names: 'tokens_bought,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferInput',
    type: 'function',
    signature: 'ethToTokenTransferInput(uint256,uint256,address)',
    encoding: '0xad65d76d',
    input_names: 'min_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferOutput',
    type: 'function',
    signature: 'ethToTokenTransferOutput(uint256,uint256,address)',
    encoding: '0x0b573638',
    input_names: 'tokens_bought,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'factoryAddress',
    type: 'function',
    signature: 'factoryAddress()',
    encoding: '0x966dae0e',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenInputPrice',
    type: 'function',
    signature: 'getEthToTokenInputPrice(uint256)',
    encoding: '0xcd7724c3',
    input_names: 'eth_sold,',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenOutputPrice',
    type: 'function',
    signature: 'getEthToTokenOutputPrice(uint256)',
    encoding: '0x59e94862',
    input_names: 'tokens_bought,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthInputPrice',
    type: 'function',
    signature: 'getTokenToEthInputPrice(uint256)',
    encoding: '0x95b68fe7',
    input_names: 'tokens_sold,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthOutputPrice',
    type: 'function',
    signature: 'getTokenToEthOutputPrice(uint256)',
    encoding: '0x2640f62c',
    input_names: 'eth_bought,',
    output_names: 'out,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'out,'
  },
  {
    name: 'removeLiquidity',
    type: 'function',
    signature: 'removeLiquidity(uint256,uint256,uint256,uint256)',
    encoding: '0xf88bf15a',
    input_names: 'amount,min_eth,min_tokens,deadline,',
    output_names: 'out,out,'
  },
  {
    name: 'setup',
    type: 'function',
    signature: 'setup(address)',
    encoding: '0x66d38203',
    input_names: 'token_addr,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'out,'
  },
  {
    name: 'tokenAddress',
    type: 'function',
    signature: 'tokenAddress()',
    encoding: '0x9d76ea58',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapInput',
    type: 'function',
    signature: 'tokenToEthSwapInput(uint256,uint256,uint256)',
    encoding: '0x95e3c50b',
    input_names: 'tokens_sold,min_eth,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapOutput',
    type: 'function',
    signature: 'tokenToEthSwapOutput(uint256,uint256,uint256)',
    encoding: '0x013efd8b',
    input_names: 'eth_bought,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferInput',
    type: 'function',
    signature: 'tokenToEthTransferInput(uint256,uint256,uint256,address)',
    encoding: '0x7237e031',
    input_names: 'tokens_sold,min_eth,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferOutput',
    type: 'function',
    signature: 'tokenToEthTransferOutput(uint256,uint256,uint256,address)',
    encoding: '0xd4e4841d',
    input_names: 'eth_bought,max_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapInput',
    type: 'function',
    signature: 'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb1cb43bf',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapOutput',
    type: 'function',
    signature: 'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xea650c7d',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferInput',
    type: 'function',
    signature: 'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xec384a3e',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferOutput',
    type: 'function',
    signature: 'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0x981a1327',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapInput',
    type: 'function',
    signature: 'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xddf7e1a7',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapOutput',
    type: 'function',
    signature: 'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb040d545',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferInput',
    type: 'function',
    signature: 'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf552d91b',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferOutput',
    type: 'function',
    signature: 'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf3c0efe9',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'out,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'AddLiquidity',
    type: 'event',
    signature: 'AddLiquidity(address,uint256,uint256)',
    encoding: '0x06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'EthPurchase',
    type: 'event',
    signature: 'EthPurchase(address,uint256,uint256)',
    encoding: '0x7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b353984238705',
    input_names: 'buyer,tokens_sold,eth_bought,'
  },
  {
    name: 'RemoveLiquidity',
    type: 'event',
    signature: 'RemoveLiquidity(address,uint256,uint256)',
    encoding: '0x0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e8',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'TokenPurchase',
    type: 'event',
    signature: 'TokenPurchase(address,uint256,uint256)',
    encoding: '0xcd60aa75dea3072fbc07ae6d7d856b5dc5f4eee88854f5b4abf7b680ef8bc50f',
    input_names: 'buyer,eth_sold,tokens_bought,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256,uint256)',
    encoding: '0xaf8342fe',
    input_names: '_owners,_required,_daylimit,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256)',
    encoding: '0xfcd52c14',
    input_names: '_owners,_required,'
  },
  {
    type: 'fallback',
    signature: '()',
    encoding: '0x861731d5'
  },
  {
    name: 'MAX_OWNER_COUNT',
    type: 'function',
    signature: 'MAX_OWNER_COUNT()',
    encoding: '0xd74f8edd',
    output_names: 'val_0,'
  },
  {
    name: 'addOwner',
    type: 'function',
    signature: 'addOwner(address)',
    encoding: '0x7065cb48',
    input_names: '_owner,'
  },
  {
    name: 'changeOwner',
    type: 'function',
    signature: 'changeOwner(address,address)',
    encoding: '0xf00d4b5d',
    input_names: '_from,_to,'
  },
  {
    name: 'changeRequirement',
    type: 'function',
    signature: 'changeRequirement(uint256)',
    encoding: '0xba51a6df',
    input_names: '_newRequired,'
  },
  {
    name: 'confirm',
    type: 'function',
    signature: 'confirm(bytes32)',
    encoding: '0x797af627',
    input_names: '_h,',
    output_names: 'val_0,'
  },
  {
    name: 'confirmTransaction',
    type: 'function',
    signature: 'confirmTransaction(uint256)',
    encoding: '0xc01a8c84',
    input_names: 'transactionId,'
  },
  {
    name: 'confirmations',
    type: 'function',
    signature: 'confirmations(uint256,address)',
    encoding: '0x3411c81c',
    input_names: 'val_0,val_1,',
    output_names: 'val_0,'
  },
  {
    name: 'execute',
    type: 'function',
    signature: 'execute(address,uint256,bytes)',
    encoding: '0xb61d27f6',
    input_names: '_to,_value,_data,',
    output_names: '_r,'
  },
  {
    name: 'executeTransaction',
    type: 'function',
    signature: 'executeTransaction(uint256)',
    encoding: '0xee22610b',
    input_names: 'transactionId,'
  },
  {
    name: 'getConfirmationCount',
    type: 'function',
    signature: 'getConfirmationCount(uint256)',
    encoding: '0x8b51d13f',
    input_names: 'transactionId,',
    output_names: 'count,'
  },
  {
    name: 'getConfirmations',
    type: 'function',
    signature: 'getConfirmations(uint256)',
    encoding: '0xb5dc40c3',
    input_names: 'transactionId,',
    output_names: '_confirmations,'
  },
  {
    name: 'getOwners',
    type: 'function',
    signature: 'getOwners()',
    encoding: '0xa0e67e2b',
    output_names: 'val_0,'
  },
  {
    name: 'getTransactionCount',
    type: 'function',
    signature: 'getTransactionCount(bool,bool)',
    encoding: '0x54741525',
    input_names: 'pending,executed,',
    output_names: 'count,'
  },
  {
    name: 'getTransactionIds',
    type: 'function',
    signature: 'getTransactionIds(uint256,uint256,bool,bool)',
    encoding: '0xa8abe69a',
    input_names: 'from,to,pending,executed,',
    output_names: '_transactionIds,'
  },
  {
    name: 'hasConfirmed',
    type: 'function',
    signature: 'hasConfirmed(bytes32,address)',
    encoding: '0xc2cf7326',
    input_names: '_operation,_owner,',
    output_names: 'val_0,'
  },
  {
    name: 'isConfirmed',
    type: 'function',
    signature: 'isConfirmed(uint256)',
    encoding: '0x784547a7',
    input_names: 'transactionId,',
    output_names: 'val_0,'
  },
  {
    name: 'isOwner',
    type: 'function',
    signature: 'isOwner(address)',
    encoding: '0x2f54bf6e',
    input_names: '_addr,',
    output_names: 'val_0,'
  },
  {
    name: 'kill',
    type: 'function',
    signature: 'kill(address)',
    encoding: '0xcbf0b0c0',
    input_names: '_to,'
  },
  {
    name: 'm_dailyLimit',
    type: 'function',
    signature: 'm_dailyLimit()',
    encoding: '0xf1736d86',
    output_names: 'val_0,'
  },
  {
    name: 'm_numOwners',
    type: 'function',
    signature: 'm_numOwners()',
    encoding: '0x4123cb6b',
    output_names: 'val_0,'
  },
  {
    name: 'm_required',
    type: 'function',
    signature: 'm_required()',
    encoding: '0x746c9171',
    output_names: 'val_0,'
  },
  {
    name: 'owners',
    type: 'function',
    signature: 'owners(uint256)',
    encoding: '0x025e7c27',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'removeOwner',
    type: 'function',
    signature: 'removeOwner(address)',
    encoding: '0x173825d9',
    input_names: '_owner,'
  },
  {
    name: 'replaceOwner',
    type: 'function',
    signature: 'replaceOwner(address,address)',
    encoding: '0xe20056e6',
    input_names: 'owner,newOwner,'
  },
  {
    name: 'required',
    type: 'function',
    signature: 'required()',
    encoding: '0xdc8452cd',
    output_names: 'val_0,'
  },
  {
    name: 'resetSpentToday',
    type: 'function',
    signature: 'resetSpentToday()',
    encoding: '0x5c52c2f5'
  },
  {
    name: 'revoke',
    type: 'function',
    signature: 'revoke(bytes32)',
    encoding: '0xb75c7dc6',
    input_names: '_operation,'
  },
  {
    name: 'revokeConfirmation',
    type: 'function',
    signature: 'revokeConfirmation(uint256)',
    encoding: '0x20ea8d86',
    input_names: 'transactionId,'
  },
  {
    name: 'setDailyLimit',
    type: 'function',
    signature: 'setDailyLimit(uint256)',
    encoding: '0xb20d30a9',
    input_names: '_newLimit,'
  },
  {
    name: 'submitTransaction',
    type: 'function',
    signature: 'submitTransaction(address,uint256,bytes)',
    encoding: '0xc6427474',
    input_names: 'destination,value,data,',
    output_names: 'transactionId,'
  },
  {
    name: 'transactionCount',
    type: 'function',
    signature: 'transactionCount()',
    encoding: '0xb77bf600',
    output_names: 'val_0,'
  },
  {
    name: 'transactions',
    type: 'function',
    signature: 'transactions(uint256)',
    encoding: '0x9ace38c2',
    input_names: 'val_0,',
    output_names: 'destination,value,data,executed,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,uint256)',
    encoding: '0x4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,bytes32)',
    encoding: '0xe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda',
    input_names: 'owner,operation,'
  },
  {
    name: 'ConfirmationNeeded',
    type: 'event',
    signature: 'ConfirmationNeeded(bytes32,address,uint256,address,bytes)',
    encoding: '0x1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32',
    input_names: 'operation,initiator,value,to,data,'
  },
  {
    name: 'Deposit',
    type: 'event',
    signature: 'Deposit(address,uint256)',
    encoding: '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c',
    input_names: 'from,value,'
  },
  {
    name: 'Execution',
    type: 'event',
    signature: 'Execution(uint256)',
    encoding: '0x33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed75',
    input_names: '_transactionId,'
  },
  {
    name: 'ExecutionFailure',
    type: 'event',
    signature: 'ExecutionFailure(uint256)',
    encoding: '0x526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b79236',
    input_names: '_transactionId,'
  },
  {
    name: 'MultiTransact',
    type: 'event',
    signature: 'MultiTransact(address,bytes32,uint256,address,bytes)',
    encoding: '0xe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a',
    input_names: 'owner,operation,value,to,data,'
  },
  {
    name: 'OwnerAdded',
    type: 'event',
    signature: 'OwnerAdded(address)',
    encoding: '0x994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3',
    input_names: 'newOwner,'
  },
  {
    name: 'OwnerAddition',
    type: 'event',
    signature: 'OwnerAddition(address)',
    encoding: '0xf39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d',
    input_names: '_owner,'
  },
  {
    name: 'OwnerChanged',
    type: 'event',
    signature: 'OwnerChanged(address,address)',
    encoding: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
    input_names: 'oldOwner,newOwner,'
  },
  {
    name: 'OwnerRemoval',
    type: 'event',
    signature: 'OwnerRemoval(address)',
    encoding: '0x8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b90',
    input_names: '_owner,'
  },
  {
    name: 'OwnerRemoved',
    type: 'event',
    signature: 'OwnerRemoved(address)',
    encoding: '0x58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da',
    input_names: 'oldOwner,'
  },
  {
    name: 'RequirementChange',
    type: 'event',
    signature: 'RequirementChange(uint256)',
    encoding: '0xa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a',
    input_names: '_required,'
  },
  {
    name: 'RequirementChanged',
    type: 'event',
    signature: 'RequirementChanged(uint256)',
    encoding: '0xacbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da',
    input_names: 'newRequirement,'
  },
  {
    name: 'Revocation',
    type: 'event',
    signature: 'Revocation(address,uint256)',
    encoding: '0xf6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e9',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Revoke',
    type: 'event',
    signature: 'Revoke(address,bytes32)',
    encoding: '0xc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b',
    input_names: 'owner,operation,'
  },
  {
    name: 'SingleTransact',
    type: 'event',
    signature: 'SingleTransact(address,uint256,address,bytes)',
    encoding: '0x92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd004',
    input_names: 'owner,value,to,data,'
  },
  {
    name: 'Submission',
    type: 'event',
    signature: 'Submission(uint256)',
    encoding: '0xc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e51',
    input_names: '_transactionId,'
  },
  {
    name: '_doSafeBatchTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)',
    encoding: '0xe51c223d',
    input_names: '_operator,_from,_to,_ids,_values,_data,'
  },
  {
    name: '_doSafeTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)',
    encoding: '0x084e9e24',
    input_names: '_operator,_from,_to,_id,_value,_data,'
  },
  {
    name: 'add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address,uint256)',
    encoding: '0x00fdd58e',
    input_names: '_owner,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfBatch',
    type: 'function',
    signature: 'balanceOfBatch(address[],uint256[])',
    encoding: '0x4e1273f4',
    input_names: '_owners,_ids,',
    output_names: 'memory,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(uint256,string)',
    encoding: '0x0118fa49',
    input_names: '_initialSupply,_uri,',
    output_names: '_id,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(string,bool)',
    encoding: '0xcc10e401',
    input_names: '_uri,_isNF,',
    output_names: '_type,'
  },
  {
    name: 'div',
    type: 'function',
    signature: 'div(uint256,uint256)',
    encoding: '0xa391c15b',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleBaseType',
    type: 'function',
    signature: 'getNonFungibleBaseType(uint256)',
    encoding: '0x6f969c2d',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleIndex',
    type: 'function',
    signature: 'getNonFungibleIndex(uint256)',
    encoding: '0x9cca1c64',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: 'account,',
    output_names: 'ret_0,'
  },
  {
    name: 'isFungible',
    type: 'function',
    signature: 'isFungible(uint256)',
    encoding: '0xadebf6f2',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungible',
    type: 'function',
    signature: 'isNonFungible(uint256)',
    encoding: '0xe44591f0',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleBaseType',
    type: 'function',
    signature: 'isNonFungibleBaseType(uint256)',
    encoding: '0x7269a327',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleItem',
    type: 'function',
    signature: 'isNonFungibleItem(uint256)',
    encoding: '0x5e81b958',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(uint256,address[],uint256[])',
    encoding: '0xcfa84fc1',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintFungible',
    type: 'function',
    signature: 'mintFungible(uint256,address[],uint256[])',
    encoding: '0x78b27221',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintNonFungible',
    type: 'function',
    signature: 'mintNonFungible(uint256,address[])',
    encoding: '0xf9419088',
    input_names: '_type,_to,'
  },
  {
    name: 'mul',
    type: 'function',
    signature: 'mul(uint256,uint256)',
    encoding: '0xc8a4ac9c',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'onERC1155BatchReceived',
    type: 'function',
    signature: 'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xbc197c81',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC1155Received',
    type: 'function',
    signature: 'onERC1155Received(address,address,uint256,uint256,bytes)',
    encoding: '0xf23a6e61',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXBatchReceived',
    type: 'function',
    signature: 'onERCXXXXBatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xe9e5be6a',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXReceived',
    type: 'function',
    signature: 'onERCXXXXReceived(address,address,uint256,uint256,bytes)',
    encoding: '0xeb510be8',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeBatchTransferFrom',
    type: 'function',
    signature: 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    encoding: '0x2eb2c2d6',
    input_names: '_from,_to,_ids,_values,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,uint256,bytes)',
    encoding: '0xf242432a',
    input_names: '_from,_to,_id,_value,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'setCompleted',
    type: 'function',
    signature: 'setCompleted(uint256)',
    encoding: '0xfdacd576',
    input_names: 'completed,'
  },
  {
    name: 'setShouldReject',
    type: 'function',
    signature: 'setShouldReject(bool)',
    encoding: '0xa175b638',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectClash',
    type: 'function',
    signature: 'setShouldRejectClash(bool)',
    encoding: '0x2090dd24',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectXXXX',
    type: 'function',
    signature: 'setShouldRejectXXXX(bool)',
    encoding: '0x80f5fe74',
    input_names: '_value,'
  },
  {
    name: 'setURI',
    type: 'function',
    signature: 'setURI(string,uint256)',
    encoding: '0x67db3b8f',
    input_names: '_uri,_id,'
  },
  {
    name: 'sub',
    type: 'function',
    signature: 'sub(uint256,uint256)',
    encoding: '0xb67d77c5',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'updateContract',
    type: 'function',
    signature: 'updateContract(address,string,string)',
    encoding: '0x61455567',
    input_names: '_delegate,_functionSignatures,_commitMessage,'
  },
  {
    name: 'upgrade',
    type: 'function',
    signature: 'upgrade(address)',
    encoding: '0x0900f010',
    input_names: 'new_address,'
  },
  {
    name: 'uri',
    type: 'function',
    signature: 'uri(uint256)',
    encoding: '0x0e89341c',
    input_names: '_id,',
    output_names: 'memory,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256,uint256,uint256)',
    encoding: '0x3a9c85c6b31f7a9d7fe1478f53e1be42e85db97ca30d1789cfef9196dbc472c9',
    input_names: '_owner,_spender,_id,_oldValue,_value,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'CommitMessage',
    type: 'event',
    signature: 'CommitMessage(string)',
    encoding: '0xaa1c0a0a78cec2470f9652e5d29540752e7a64d70f926933cebf13afaeda45de',
    input_names: 'message,'
  },
  {
    name: 'FunctionUpdate',
    type: 'event',
    signature: 'FunctionUpdate(bytes4,address,address,string)',
    encoding: '0x3234040ce3bd4564874e44810f198910133a1b24c4e84aac87edbf6b458f5353',
    input_names: 'functionId,oldDelegate,newDelegate,functionSignature,'
  },
  {
    name: 'TransferBatch',
    type: 'event',
    signature: 'TransferBatch(address,address,address,uint256[],uint256[])',
    encoding: '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
    input_names: '_operator,_from,_to,_ids,_values,'
  },
  {
    name: 'TransferSingle',
    type: 'event',
    signature: 'TransferSingle(address,address,address,uint256,uint256)',
    encoding: '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
    input_names: '_operator,_from,_to,_id,_value,'
  },
  {
    name: 'URI',
    type: 'event',
    signature: 'URI(string,uint256)',
    encoding: '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b',
    input_names: '_value,_id,'
  },
  {
    name: 'canTransfer',
    type: 'function',
    signature: 'canTransfer(address,uint256,bytes)',
    encoding: '0x1badb25c',
    input_names: '_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'canTransferFrom',
    type: 'function',
    signature: 'canTransferFrom(address,address,uint256,bytes)',
    encoding: '0x122eb575',
    input_names: '_from,_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'isIssuable',
    type: 'function',
    signature: 'isIssuable()',
    encoding: '0x2f1cae85',
    output_names: 'ret_0,'
  },
  {
    name: 'issue',
    type: 'function',
    signature: 'issue(address,uint256,bytes)',
    encoding: '0xbb3acde9',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'redeem',
    type: 'function',
    signature: 'redeem(uint256,bytes)',
    encoding: '0xe77c646d',
    input_names: '_value,_data,'
  },
  {
    name: 'redeemFrom',
    type: 'function',
    signature: 'redeemFrom(address,uint256,bytes)',
    encoding: '0x9675193c',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'transferFromWithData',
    type: 'function',
    signature: 'transferFromWithData(address,address,uint256,bytes)',
    encoding: '0xee532f31',
    input_names: '_from,_to,_value,_data,'
  },
  {
    name: 'transferWithData',
    type: 'function',
    signature: 'transferWithData(address,uint256,bytes)',
    encoding: '0x2535f762',
    input_names: '_to,_value,_data,'
  },
  {
    name: 'Issued',
    type: 'event',
    signature: 'Issued(address,address,uint256,bytes)',
    encoding: '0x0e9905d62635f049c2f4e11678ebf9dc3d1f8c4a653e290759b772e47ba00d00',
    input_names: '_operator,_to,_value,_data,'
  },
  {
    name: 'Redeemed',
    type: 'event',
    signature: 'Redeemed(address,address,uint256,bytes)',
    encoding: '0xb7d0d6b60740753e9f16692a2f479472a1385aec2420fa43225b02f2ffa1afe7',
    input_names: '_operator,_from,_value,_data,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'canImplementInterfaceForAddress',
    type: 'function',
    signature: 'canImplementInterfaceForAddress(bytes32,address)',
    encoding: '0x249cb3fa',
    input_names: 'interfaceHash,addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'getInterfaceImplementer',
    type: 'function',
    signature: 'getInterfaceImplementer(address,bytes32)',
    encoding: '0xaabbb8ca',
    input_names: '_addr,_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'getManager',
    type: 'function',
    signature: 'getManager(address)',
    encoding: '0x3d584063',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165Interface',
    type: 'function',
    signature: 'implementsERC165Interface(address,bytes4)',
    encoding: '0xf712f3e8',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165InterfaceNoCache',
    type: 'function',
    signature: 'implementsERC165InterfaceNoCache(address,bytes4)',
    encoding: '0xb7056765',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'interfaceHash',
    type: 'function',
    signature: 'interfaceHash(string)',
    encoding: '0x65ba36c1',
    input_names: '_interfaceName,',
    output_names: 'ret_0,'
  },
  {
    name: 'isERC165Interface',
    type: 'function',
    signature: 'isERC165Interface(bytes32)',
    encoding: '0x9d4cf268',
    input_names: '_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'noThrowCall',
    type: 'function',
    signature: 'noThrowCall(address,bytes4)',
    encoding: '0xf86cd33d',
    input_names: '_contract,_interfaceId,',
    output_names: 'success,result,'
  },
  {
    name: 'setInterfaceImplementer',
    type: 'function',
    signature: 'setInterfaceImplementer(address,bytes32,address)',
    encoding: '0x29965a1d',
    input_names: '_addr,_interfaceHash,_implementer,'
  },
  {
    name: 'setManager',
    type: 'function',
    signature: 'setManager(address,address)',
    encoding: '0x5df8122f',
    input_names: '_addr,_newManager,'
  },
  {
    name: 'updateERC165Cache',
    type: 'function',
    signature: 'updateERC165Cache(address,bytes4)',
    encoding: '0xa41e7d51',
    input_names: '_contract,_interfaceId,'
  },
  {
    name: 'InterfaceImplementerSet',
    type: 'event',
    signature: 'InterfaceImplementerSet(address,bytes32,address)',
    encoding: '0x93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db153',
    input_names: 'addr,interfaceHash,implementer,'
  },
  {
    name: 'ManagerChanged',
    type: 'event',
    signature: 'ManagerChanged(address,address)',
    encoding: '0x605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a4350',
    input_names: 'addr,newManager,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'ret_0,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: '_name,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_tokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: '_symbol,'
  },
  {
    name: 'tokenURI',
    type: 'function',
    signature: 'tokenURI(uint256)',
    encoding: '0xc87b56dd',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_approved,_tokenId,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'authorizeOperator',
    type: 'function',
    signature: 'authorizeOperator(address)',
    encoding: '0x959b8c3f',
    input_names: 'operator,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: 'holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'burn',
    type: 'function',
    signature: 'burn(uint256,bytes)',
    encoding: '0xfe9d9303',
    input_names: 'amount,data,'
  },
  {
    name: 'defaultOperators',
    type: 'function',
    signature: 'defaultOperators()',
    encoding: '0x06e48538',
    output_names: 'memory,'
  },
  {
    name: 'granularity',
    type: 'function',
    signature: 'granularity()',
    encoding: '0x556f0dc7',
    output_names: 'ret_0,'
  },
  {
    name: 'isOperatorFor',
    type: 'function',
    signature: 'isOperatorFor(address,address)',
    encoding: '0xd95b6371',
    input_names: 'operator,holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'memory,'
  },
  {
    name: 'operatorBurn',
    type: 'function',
    signature: 'operatorBurn(address,uint256,bytes,bytes)',
    encoding: '0xfc673c4f',
    input_names: 'from,amount,data,operatorData,'
  },
  {
    name: 'operatorSend',
    type: 'function',
    signature: 'operatorSend(address,address,uint256,bytes,bytes)',
    encoding: '0x62ad1b83',
    input_names: 'from,to,amount,data,operatorData,'
  },
  {
    name: 'revokeOperator',
    type: 'function',
    signature: 'revokeOperator(address)',
    encoding: '0xfad8b32a',
    input_names: 'operator,'
  },
  {
    name: 'send',
    type: 'function',
    signature: 'send(address,uint256,bytes)',
    encoding: '0x9bd9bbc6',
    input_names: 'to,amount,data,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'memory,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'ret_0,'
  },
  {
    name: 'AuthorizedOperator',
    type: 'event',
    signature: 'AuthorizedOperator(address,address)',
    encoding: '0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9',
    input_names: 'operator,holder,'
  },
  {
    name: 'Burned',
    type: 'event',
    signature: 'Burned(address,address,uint256,bytes,bytes)',
    encoding: '0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098',
    input_names: 'operator,from,amount,data,operatorData,'
  },
  {
    name: 'Minted',
    type: 'event',
    signature: 'Minted(address,address,uint256,bytes,bytes)',
    encoding: '0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d',
    input_names: 'operator,to,amount,data,operatorData,'
  },
  {
    name: 'RevokedOperator',
    type: 'event',
    signature: 'RevokedOperator(address,address)',
    encoding: '0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1',
    input_names: 'operator,holder,'
  },
  {
    name: 'Sent',
    type: 'event',
    signature: 'Sent(address,address,address,uint256,bytes,bytes)',
    encoding: '0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987',
    input_names: 'operator,from,to,amount,data,operatorData,'
  },
  {
    name: '_ownerOfChild',
    type: 'function',
    signature: '_ownerOfChild(address,uint256)',
    encoding: '0xa5aeb1d4',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: '_transferFrom',
    type: 'function',
    signature: '_transferFrom(address,address,uint256)',
    encoding: '0xcb712535',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'remaining,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_tokenOwner,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfERC20',
    type: 'function',
    signature: 'balanceOfERC20(uint256,address)',
    encoding: '0xe226ed22',
    input_names: '_tokenId,__erc20Contract,',
    output_names: 'ret_0,'
  },
  {
    name: 'childContractByIndex',
    type: 'function',
    signature: 'childContractByIndex(uint256,uint256)',
    encoding: '0x0d5a621b',
    input_names: '_tokenId,_index,',
    output_names: 'childContract,'
  },
  {
    name: 'childExists',
    type: 'function',
    signature: 'childExists(address,uint256)',
    encoding: '0x5680a3ad',
    input_names: '_childContract,_childTokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'childTokenByIndex',
    type: 'function',
    signature: 'childTokenByIndex(uint256,address,uint256)',
    encoding: '0x160b01a1',
    input_names: '_tokenId,_childContract,_index,',
    output_names: 'childTokenId,'
  },
  {
    name: 'erc20ContractByIndex',
    type: 'function',
    signature: 'erc20ContractByIndex(uint256,uint256)',
    encoding: '0x627c81ff',
    input_names: '_tokenId,_index,',
    output_names: 'ret_0,'
  },
  {
    name: 'erc20Received',
    type: 'function',
    signature: 'erc20Received(address,uint256,address,uint256)',
    encoding: '0x9e95670d',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'getChild',
    type: 'function',
    signature: 'getChild(address,uint256,address,uint256)',
    encoding: '0xba6b5f96',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'getERC20',
    type: 'function',
    signature: 'getERC20(address,uint256,address,uint256)',
    encoding: '0x07cff6f2',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(address)',
    encoding: '0x6a627842',
    input_names: '_to,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,uint256,bytes)',
    encoding: '0xf0b9e5ba',
    input_names: '_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'tokenOwner,'
  },
  {
    name: 'ownerOfChild',
    type: 'function',
    signature: 'ownerOfChild(address,uint256)',
    encoding: '0xeadb80b8',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: 'receiveChild',
    type: 'function',
    signature: 'receiveChild(address,uint256,address,uint256)',
    encoding: '0x597c255f',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeChild',
    type: 'function',
    signature: 'removeChild(uint256,address,uint256)',
    encoding: '0x0f0ba766',
    input_names: '_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeERC20',
    type: 'function',
    signature: 'removeERC20(uint256,address,uint256)',
    encoding: '0x9771ccc8',
    input_names: '_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'rootOwnerOf',
    type: 'function',
    signature: 'rootOwnerOf(uint256)',
    encoding: '0x43a61a8e',
    input_names: '_tokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'rootOwnerOfChild',
    type: 'function',
    signature: 'rootOwnerOfChild(address,uint256)',
    encoding: '0xed81cdda',
    input_names: '_childContract,_childTokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256)',
    encoding: '0x1d98f3c5',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256,bytes)',
    encoding: '0x8d81f51e',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'tokenFallback',
    type: 'function',
    signature: 'tokenFallback(address,uint256,bytes)',
    encoding: '0xc0ee0b8a',
    input_names: '_from,_value,_data,'
  },
  {
    name: 'totalChildContracts',
    type: 'function',
    signature: 'totalChildContracts(uint256)',
    encoding: '0x8da7d0b5',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalChildTokens',
    type: 'function',
    signature: 'totalChildTokens(uint256,address)',
    encoding: '0x35b21ceb',
    input_names: '_tokenId,_childContract,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalERC20Contracts',
    type: 'function',
    signature: 'totalERC20Contracts(uint256)',
    encoding: '0xa7811732',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: 'to,value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256,bytes)',
    encoding: '0xbe45fd62',
    input_names: 'to,value,data,',
    output_names: 'success,'
  },
  {
    name: 'transferChild',
    type: 'function',
    signature: 'transferChild(uint256,address,address,uint256)',
    encoding: '0xbef44f18',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'transferChildToParent',
    type: 'function',
    signature: 'transferChildToParent(uint256,address,uint256,address,uint256,bytes)',
    encoding: '0x08937f62',
    input_names: '_fromTokenId,_toContract,_toTokenId,_childContract,_childTokenId,_data,'
  },
  {
    name: 'transferERC20',
    type: 'function',
    signature: 'transferERC20(uint256,address,address,uint256)',
    encoding: '0x830ef41b',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'transferERC223',
    type: 'function',
    signature: 'transferERC223(uint256,address,address,uint256,bytes)',
    encoding: '0xd49d1bac',
    input_names: '_tokenId,_to,_erc223Contract,_value,_data,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferToParent',
    type: 'function',
    signature: 'transferToParent(address,address,uint256,uint256,bytes)',
    encoding: '0xf50acfa0',
    input_names: '_from,_toContract,_toTokenId,_tokenId,_data,'
  },
  {
    name: 'ReceivedChild',
    type: 'event',
    signature: 'ReceivedChild(address,uint256,address,uint256)',
    encoding: '0x0371ddf2288ad1ba92626a7e31c86a9d006e592cfe57d7d946ef08b13457c08b',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'ReceivedERC20',
    type: 'event',
    signature: 'ReceivedERC20(address,uint256,address,uint256)',
    encoding: '0x684ce28ace37552c6bfb98b7cceda8ed55327078eafb5dfb31218e0856382763',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'TransferChild',
    type: 'event',
    signature: 'TransferChild(uint256,address,address,uint256)',
    encoding: '0x0ef52e516fb5aec15a5d3587e5480481b702b26db93c8430eca78b61990fd3f6',
    input_names: 'tokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'TransferERC20',
    type: 'event',
    signature: 'TransferERC20(uint256,address,address,uint256)',
    encoding: '0xa8352277873fc0d2b233b8127433da351a4164fa701ed6ff79655694222932c4',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'authority',
    type: 'function',
    signature: 'authority()',
    encoding: '0xbf7e214f',
    output_names: 'val_0,'
  },
  {
    name: 'compute',
    type: 'function',
    signature: 'compute()',
    encoding: '0x1a43c338',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'indexes',
    type: 'function',
    signature: 'indexes(address)',
    encoding: '0x2db78d93',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'min',
    type: 'function',
    signature: 'min()',
    encoding: '0xf8897945',
    output_names: 'val_0,'
  },
  {
    name: 'next',
    type: 'function',
    signature: 'next()',
    encoding: '0x4c8fe526',
    output_names: 'val_0,'
  },
  {
    name: 'owner',
    type: 'function',
    signature: 'owner()',
    encoding: '0x8da5cb5b',
    output_names: 'val_0,'
  },
  {
    name: 'peek',
    type: 'function',
    signature: 'peek()',
    encoding: '0x59e02dd7',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke(bytes32)',
    encoding: '0x1504460f',
    input_names: 'val_0,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke()',
    encoding: '0x18178358'
  },
  {
    name: 'read',
    type: 'function',
    signature: 'read()',
    encoding: '0x57de26a4',
    output_names: 'val_0,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(address)',
    encoding: '0x2801617e',
    input_names: 'wat,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(bytes12,address)',
    encoding: '0xbeb38b43',
    input_names: 'pos,wat,'
  },
  {
    name: 'setAuthority',
    type: 'function',
    signature: 'setAuthority(address)',
    encoding: '0x7a9e5e4b',
    input_names: 'authority_,'
  },
  {
    name: 'setMin',
    type: 'function',
    signature: 'setMin(uint96)',
    encoding: '0x6ba5ef0d',
    input_names: 'min_,'
  },
  {
    name: 'setNext',
    type: 'function',
    signature: 'setNext(bytes12)',
    encoding: '0xf2c5925d',
    input_names: 'next_,'
  },
  {
    name: 'setOwner',
    type: 'function',
    signature: 'setOwner(address)',
    encoding: '0x13af4035',
    input_names: 'owner_,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(address)',
    encoding: '0x2966d1b9',
    input_names: 'wat,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(bytes12)',
    encoding: '0xe0a1fdad',
    input_names: 'pos,'
  },
  {
    name: 'values',
    type: 'function',
    signature: 'values(bytes12)',
    encoding: '0x651dd0de',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'void',
    type: 'function',
    signature: 'void()',
    encoding: '0xac4c25b2'
  },
  {
    name: 'LogNote',
    type: 'event',
    signature: 'LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)',
    encoding: '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31',
    input_names: 'sig,guy,foo,bar,wad,fax,'
  },
  {
    name: 'LogSetAuthority',
    type: 'event',
    signature: 'LogSetAuthority(address)',
    encoding: '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4',
    input_names: 'authority,'
  },
  {
    name: 'LogSetOwner',
    type: 'event',
    signature: 'LogSetOwner(address)',
    encoding: '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94',
    input_names: 'owner,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    name: '__default__',
    type: 'function',
    signature: '__default__()',
    encoding: '0x89402a72'
  },
  {
    name: 'addLiquidity',
    type: 'function',
    signature: 'addLiquidity(uint256,uint256,uint256)',
    encoding: '0x422f1043',
    input_names: 'min_liquidity,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'out,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'out,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'out,'
  },
  {
    name: 'decimals',
    type: 'function',
    signature: 'decimals()',
    encoding: '0x313ce567',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapInput',
    type: 'function',
    signature: 'ethToTokenSwapInput(uint256,uint256)',
    encoding: '0xf39b5b9b',
    input_names: 'min_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapOutput',
    type: 'function',
    signature: 'ethToTokenSwapOutput(uint256,uint256)',
    encoding: '0x6b1d4db7',
    input_names: 'tokens_bought,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferInput',
    type: 'function',
    signature: 'ethToTokenTransferInput(uint256,uint256,address)',
    encoding: '0xad65d76d',
    input_names: 'min_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferOutput',
    type: 'function',
    signature: 'ethToTokenTransferOutput(uint256,uint256,address)',
    encoding: '0x0b573638',
    input_names: 'tokens_bought,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'factoryAddress',
    type: 'function',
    signature: 'factoryAddress()',
    encoding: '0x966dae0e',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenInputPrice',
    type: 'function',
    signature: 'getEthToTokenInputPrice(uint256)',
    encoding: '0xcd7724c3',
    input_names: 'eth_sold,',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenOutputPrice',
    type: 'function',
    signature: 'getEthToTokenOutputPrice(uint256)',
    encoding: '0x59e94862',
    input_names: 'tokens_bought,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthInputPrice',
    type: 'function',
    signature: 'getTokenToEthInputPrice(uint256)',
    encoding: '0x95b68fe7',
    input_names: 'tokens_sold,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthOutputPrice',
    type: 'function',
    signature: 'getTokenToEthOutputPrice(uint256)',
    encoding: '0x2640f62c',
    input_names: 'eth_bought,',
    output_names: 'out,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'out,'
  },
  {
    name: 'removeLiquidity',
    type: 'function',
    signature: 'removeLiquidity(uint256,uint256,uint256,uint256)',
    encoding: '0xf88bf15a',
    input_names: 'amount,min_eth,min_tokens,deadline,',
    output_names: 'out,out,'
  },
  {
    name: 'setup',
    type: 'function',
    signature: 'setup(address)',
    encoding: '0x66d38203',
    input_names: 'token_addr,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'out,'
  },
  {
    name: 'tokenAddress',
    type: 'function',
    signature: 'tokenAddress()',
    encoding: '0x9d76ea58',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapInput',
    type: 'function',
    signature: 'tokenToEthSwapInput(uint256,uint256,uint256)',
    encoding: '0x95e3c50b',
    input_names: 'tokens_sold,min_eth,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapOutput',
    type: 'function',
    signature: 'tokenToEthSwapOutput(uint256,uint256,uint256)',
    encoding: '0x013efd8b',
    input_names: 'eth_bought,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferInput',
    type: 'function',
    signature: 'tokenToEthTransferInput(uint256,uint256,uint256,address)',
    encoding: '0x7237e031',
    input_names: 'tokens_sold,min_eth,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferOutput',
    type: 'function',
    signature: 'tokenToEthTransferOutput(uint256,uint256,uint256,address)',
    encoding: '0xd4e4841d',
    input_names: 'eth_bought,max_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapInput',
    type: 'function',
    signature: 'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb1cb43bf',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapOutput',
    type: 'function',
    signature: 'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xea650c7d',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferInput',
    type: 'function',
    signature: 'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xec384a3e',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferOutput',
    type: 'function',
    signature: 'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0x981a1327',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapInput',
    type: 'function',
    signature: 'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xddf7e1a7',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapOutput',
    type: 'function',
    signature: 'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb040d545',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferInput',
    type: 'function',
    signature: 'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf552d91b',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferOutput',
    type: 'function',
    signature: 'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf3c0efe9',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'out,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'AddLiquidity',
    type: 'event',
    signature: 'AddLiquidity(address,uint256,uint256)',
    encoding: '0x06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'EthPurchase',
    type: 'event',
    signature: 'EthPurchase(address,uint256,uint256)',
    encoding: '0x7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b353984238705',
    input_names: 'buyer,tokens_sold,eth_bought,'
  },
  {
    name: 'RemoveLiquidity',
    type: 'event',
    signature: 'RemoveLiquidity(address,uint256,uint256)',
    encoding: '0x0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e8',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'TokenPurchase',
    type: 'event',
    signature: 'TokenPurchase(address,uint256,uint256)',
    encoding: '0xcd60aa75dea3072fbc07ae6d7d856b5dc5f4eee88854f5b4abf7b680ef8bc50f',
    input_names: 'buyer,eth_sold,tokens_bought,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256,uint256)',
    encoding: '0xaf8342fe',
    input_names: '_owners,_required,_daylimit,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256)',
    encoding: '0xfcd52c14',
    input_names: '_owners,_required,'
  },
  {
    type: 'fallback',
    signature: '()',
    encoding: '0x861731d5'
  },
  {
    name: 'MAX_OWNER_COUNT',
    type: 'function',
    signature: 'MAX_OWNER_COUNT()',
    encoding: '0xd74f8edd',
    output_names: 'val_0,'
  },
  {
    name: 'addOwner',
    type: 'function',
    signature: 'addOwner(address)',
    encoding: '0x7065cb48',
    input_names: '_owner,'
  },
  {
    name: 'changeOwner',
    type: 'function',
    signature: 'changeOwner(address,address)',
    encoding: '0xf00d4b5d',
    input_names: '_from,_to,'
  },
  {
    name: 'changeRequirement',
    type: 'function',
    signature: 'changeRequirement(uint256)',
    encoding: '0xba51a6df',
    input_names: '_newRequired,'
  },
  {
    name: 'confirm',
    type: 'function',
    signature: 'confirm(bytes32)',
    encoding: '0x797af627',
    input_names: '_h,',
    output_names: 'val_0,'
  },
  {
    name: 'confirmTransaction',
    type: 'function',
    signature: 'confirmTransaction(uint256)',
    encoding: '0xc01a8c84',
    input_names: 'transactionId,'
  },
  {
    name: 'confirmations',
    type: 'function',
    signature: 'confirmations(uint256,address)',
    encoding: '0x3411c81c',
    input_names: 'val_0,val_1,',
    output_names: 'val_0,'
  },
  {
    name: 'execute',
    type: 'function',
    signature: 'execute(address,uint256,bytes)',
    encoding: '0xb61d27f6',
    input_names: '_to,_value,_data,',
    output_names: '_r,'
  },
  {
    name: 'executeTransaction',
    type: 'function',
    signature: 'executeTransaction(uint256)',
    encoding: '0xee22610b',
    input_names: 'transactionId,'
  },
  {
    name: 'getConfirmationCount',
    type: 'function',
    signature: 'getConfirmationCount(uint256)',
    encoding: '0x8b51d13f',
    input_names: 'transactionId,',
    output_names: 'count,'
  },
  {
    name: 'getConfirmations',
    type: 'function',
    signature: 'getConfirmations(uint256)',
    encoding: '0xb5dc40c3',
    input_names: 'transactionId,',
    output_names: '_confirmations,'
  },
  {
    name: 'getOwners',
    type: 'function',
    signature: 'getOwners()',
    encoding: '0xa0e67e2b',
    output_names: 'val_0,'
  },
  {
    name: 'getTransactionCount',
    type: 'function',
    signature: 'getTransactionCount(bool,bool)',
    encoding: '0x54741525',
    input_names: 'pending,executed,',
    output_names: 'count,'
  },
  {
    name: 'getTransactionIds',
    type: 'function',
    signature: 'getTransactionIds(uint256,uint256,bool,bool)',
    encoding: '0xa8abe69a',
    input_names: 'from,to,pending,executed,',
    output_names: '_transactionIds,'
  },
  {
    name: 'hasConfirmed',
    type: 'function',
    signature: 'hasConfirmed(bytes32,address)',
    encoding: '0xc2cf7326',
    input_names: '_operation,_owner,',
    output_names: 'val_0,'
  },
  {
    name: 'isConfirmed',
    type: 'function',
    signature: 'isConfirmed(uint256)',
    encoding: '0x784547a7',
    input_names: 'transactionId,',
    output_names: 'val_0,'
  },
  {
    name: 'isOwner',
    type: 'function',
    signature: 'isOwner(address)',
    encoding: '0x2f54bf6e',
    input_names: '_addr,',
    output_names: 'val_0,'
  },
  {
    name: 'kill',
    type: 'function',
    signature: 'kill(address)',
    encoding: '0xcbf0b0c0',
    input_names: '_to,'
  },
  {
    name: 'm_dailyLimit',
    type: 'function',
    signature: 'm_dailyLimit()',
    encoding: '0xf1736d86',
    output_names: 'val_0,'
  },
  {
    name: 'm_numOwners',
    type: 'function',
    signature: 'm_numOwners()',
    encoding: '0x4123cb6b',
    output_names: 'val_0,'
  },
  {
    name: 'm_required',
    type: 'function',
    signature: 'm_required()',
    encoding: '0x746c9171',
    output_names: 'val_0,'
  },
  {
    name: 'owners',
    type: 'function',
    signature: 'owners(uint256)',
    encoding: '0x025e7c27',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'removeOwner',
    type: 'function',
    signature: 'removeOwner(address)',
    encoding: '0x173825d9',
    input_names: '_owner,'
  },
  {
    name: 'replaceOwner',
    type: 'function',
    signature: 'replaceOwner(address,address)',
    encoding: '0xe20056e6',
    input_names: 'owner,newOwner,'
  },
  {
    name: 'required',
    type: 'function',
    signature: 'required()',
    encoding: '0xdc8452cd',
    output_names: 'val_0,'
  },
  {
    name: 'resetSpentToday',
    type: 'function',
    signature: 'resetSpentToday()',
    encoding: '0x5c52c2f5'
  },
  {
    name: 'revoke',
    type: 'function',
    signature: 'revoke(bytes32)',
    encoding: '0xb75c7dc6',
    input_names: '_operation,'
  },
  {
    name: 'revokeConfirmation',
    type: 'function',
    signature: 'revokeConfirmation(uint256)',
    encoding: '0x20ea8d86',
    input_names: 'transactionId,'
  },
  {
    name: 'setDailyLimit',
    type: 'function',
    signature: 'setDailyLimit(uint256)',
    encoding: '0xb20d30a9',
    input_names: '_newLimit,'
  },
  {
    name: 'submitTransaction',
    type: 'function',
    signature: 'submitTransaction(address,uint256,bytes)',
    encoding: '0xc6427474',
    input_names: 'destination,value,data,',
    output_names: 'transactionId,'
  },
  {
    name: 'transactionCount',
    type: 'function',
    signature: 'transactionCount()',
    encoding: '0xb77bf600',
    output_names: 'val_0,'
  },
  {
    name: 'transactions',
    type: 'function',
    signature: 'transactions(uint256)',
    encoding: '0x9ace38c2',
    input_names: 'val_0,',
    output_names: 'destination,value,data,executed,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,uint256)',
    encoding: '0x4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,bytes32)',
    encoding: '0xe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda',
    input_names: 'owner,operation,'
  },
  {
    name: 'ConfirmationNeeded',
    type: 'event',
    signature: 'ConfirmationNeeded(bytes32,address,uint256,address,bytes)',
    encoding: '0x1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32',
    input_names: 'operation,initiator,value,to,data,'
  },
  {
    name: 'Deposit',
    type: 'event',
    signature: 'Deposit(address,uint256)',
    encoding: '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c',
    input_names: 'from,value,'
  },
  {
    name: 'Execution',
    type: 'event',
    signature: 'Execution(uint256)',
    encoding: '0x33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed75',
    input_names: '_transactionId,'
  },
  {
    name: 'ExecutionFailure',
    type: 'event',
    signature: 'ExecutionFailure(uint256)',
    encoding: '0x526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b79236',
    input_names: '_transactionId,'
  },
  {
    name: 'MultiTransact',
    type: 'event',
    signature: 'MultiTransact(address,bytes32,uint256,address,bytes)',
    encoding: '0xe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a',
    input_names: 'owner,operation,value,to,data,'
  },
  {
    name: 'OwnerAdded',
    type: 'event',
    signature: 'OwnerAdded(address)',
    encoding: '0x994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3',
    input_names: 'newOwner,'
  },
  {
    name: 'OwnerAddition',
    type: 'event',
    signature: 'OwnerAddition(address)',
    encoding: '0xf39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d',
    input_names: '_owner,'
  },
  {
    name: 'OwnerChanged',
    type: 'event',
    signature: 'OwnerChanged(address,address)',
    encoding: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
    input_names: 'oldOwner,newOwner,'
  },
  {
    name: 'OwnerRemoval',
    type: 'event',
    signature: 'OwnerRemoval(address)',
    encoding: '0x8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b90',
    input_names: '_owner,'
  },
  {
    name: 'OwnerRemoved',
    type: 'event',
    signature: 'OwnerRemoved(address)',
    encoding: '0x58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da',
    input_names: 'oldOwner,'
  },
  {
    name: 'RequirementChange',
    type: 'event',
    signature: 'RequirementChange(uint256)',
    encoding: '0xa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a',
    input_names: '_required,'
  },
  {
    name: 'RequirementChanged',
    type: 'event',
    signature: 'RequirementChanged(uint256)',
    encoding: '0xacbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da',
    input_names: 'newRequirement,'
  },
  {
    name: 'Revocation',
    type: 'event',
    signature: 'Revocation(address,uint256)',
    encoding: '0xf6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e9',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Revoke',
    type: 'event',
    signature: 'Revoke(address,bytes32)',
    encoding: '0xc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b',
    input_names: 'owner,operation,'
  },
  {
    name: 'SingleTransact',
    type: 'event',
    signature: 'SingleTransact(address,uint256,address,bytes)',
    encoding: '0x92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd004',
    input_names: 'owner,value,to,data,'
  },
  {
    name: 'Submission',
    type: 'event',
    signature: 'Submission(uint256)',
    encoding: '0xc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e51',
    input_names: '_transactionId,'
  },
  {
    name: '_doSafeBatchTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)',
    encoding: '0xe51c223d',
    input_names: '_operator,_from,_to,_ids,_values,_data,'
  },
  {
    name: '_doSafeTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)',
    encoding: '0x084e9e24',
    input_names: '_operator,_from,_to,_id,_value,_data,'
  },
  {
    name: 'add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address,uint256)',
    encoding: '0x00fdd58e',
    input_names: '_owner,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfBatch',
    type: 'function',
    signature: 'balanceOfBatch(address[],uint256[])',
    encoding: '0x4e1273f4',
    input_names: '_owners,_ids,',
    output_names: 'memory,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(uint256,string)',
    encoding: '0x0118fa49',
    input_names: '_initialSupply,_uri,',
    output_names: '_id,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(string,bool)',
    encoding: '0xcc10e401',
    input_names: '_uri,_isNF,',
    output_names: '_type,'
  },
  {
    name: 'div',
    type: 'function',
    signature: 'div(uint256,uint256)',
    encoding: '0xa391c15b',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleBaseType',
    type: 'function',
    signature: 'getNonFungibleBaseType(uint256)',
    encoding: '0x6f969c2d',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleIndex',
    type: 'function',
    signature: 'getNonFungibleIndex(uint256)',
    encoding: '0x9cca1c64',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: 'account,',
    output_names: 'ret_0,'
  },
  {
    name: 'isFungible',
    type: 'function',
    signature: 'isFungible(uint256)',
    encoding: '0xadebf6f2',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungible',
    type: 'function',
    signature: 'isNonFungible(uint256)',
    encoding: '0xe44591f0',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleBaseType',
    type: 'function',
    signature: 'isNonFungibleBaseType(uint256)',
    encoding: '0x7269a327',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleItem',
    type: 'function',
    signature: 'isNonFungibleItem(uint256)',
    encoding: '0x5e81b958',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(uint256,address[],uint256[])',
    encoding: '0xcfa84fc1',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintFungible',
    type: 'function',
    signature: 'mintFungible(uint256,address[],uint256[])',
    encoding: '0x78b27221',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintNonFungible',
    type: 'function',
    signature: 'mintNonFungible(uint256,address[])',
    encoding: '0xf9419088',
    input_names: '_type,_to,'
  },
  {
    name: 'mul',
    type: 'function',
    signature: 'mul(uint256,uint256)',
    encoding: '0xc8a4ac9c',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'onERC1155BatchReceived',
    type: 'function',
    signature: 'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xbc197c81',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC1155Received',
    type: 'function',
    signature: 'onERC1155Received(address,address,uint256,uint256,bytes)',
    encoding: '0xf23a6e61',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXBatchReceived',
    type: 'function',
    signature: 'onERCXXXXBatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xe9e5be6a',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXReceived',
    type: 'function',
    signature: 'onERCXXXXReceived(address,address,uint256,uint256,bytes)',
    encoding: '0xeb510be8',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeBatchTransferFrom',
    type: 'function',
    signature: 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    encoding: '0x2eb2c2d6',
    input_names: '_from,_to,_ids,_values,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,uint256,bytes)',
    encoding: '0xf242432a',
    input_names: '_from,_to,_id,_value,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'setCompleted',
    type: 'function',
    signature: 'setCompleted(uint256)',
    encoding: '0xfdacd576',
    input_names: 'completed,'
  },
  {
    name: 'setShouldReject',
    type: 'function',
    signature: 'setShouldReject(bool)',
    encoding: '0xa175b638',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectClash',
    type: 'function',
    signature: 'setShouldRejectClash(bool)',
    encoding: '0x2090dd24',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectXXXX',
    type: 'function',
    signature: 'setShouldRejectXXXX(bool)',
    encoding: '0x80f5fe74',
    input_names: '_value,'
  },
  {
    name: 'setURI',
    type: 'function',
    signature: 'setURI(string,uint256)',
    encoding: '0x67db3b8f',
    input_names: '_uri,_id,'
  },
  {
    name: 'sub',
    type: 'function',
    signature: 'sub(uint256,uint256)',
    encoding: '0xb67d77c5',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'updateContract',
    type: 'function',
    signature: 'updateContract(address,string,string)',
    encoding: '0x61455567',
    input_names: '_delegate,_functionSignatures,_commitMessage,'
  },
  {
    name: 'upgrade',
    type: 'function',
    signature: 'upgrade(address)',
    encoding: '0x0900f010',
    input_names: 'new_address,'
  },
  {
    name: 'uri',
    type: 'function',
    signature: 'uri(uint256)',
    encoding: '0x0e89341c',
    input_names: '_id,',
    output_names: 'memory,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256,uint256,uint256)',
    encoding: '0x3a9c85c6b31f7a9d7fe1478f53e1be42e85db97ca30d1789cfef9196dbc472c9',
    input_names: '_owner,_spender,_id,_oldValue,_value,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'CommitMessage',
    type: 'event',
    signature: 'CommitMessage(string)',
    encoding: '0xaa1c0a0a78cec2470f9652e5d29540752e7a64d70f926933cebf13afaeda45de',
    input_names: 'message,'
  },
  {
    name: 'FunctionUpdate',
    type: 'event',
    signature: 'FunctionUpdate(bytes4,address,address,string)',
    encoding: '0x3234040ce3bd4564874e44810f198910133a1b24c4e84aac87edbf6b458f5353',
    input_names: 'functionId,oldDelegate,newDelegate,functionSignature,'
  },
  {
    name: 'TransferBatch',
    type: 'event',
    signature: 'TransferBatch(address,address,address,uint256[],uint256[])',
    encoding: '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
    input_names: '_operator,_from,_to,_ids,_values,'
  },
  {
    name: 'TransferSingle',
    type: 'event',
    signature: 'TransferSingle(address,address,address,uint256,uint256)',
    encoding: '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
    input_names: '_operator,_from,_to,_id,_value,'
  },
  {
    name: 'URI',
    type: 'event',
    signature: 'URI(string,uint256)',
    encoding: '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b',
    input_names: '_value,_id,'
  },
  {
    name: 'canTransfer',
    type: 'function',
    signature: 'canTransfer(address,uint256,bytes)',
    encoding: '0x1badb25c',
    input_names: '_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'canTransferFrom',
    type: 'function',
    signature: 'canTransferFrom(address,address,uint256,bytes)',
    encoding: '0x122eb575',
    input_names: '_from,_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'isIssuable',
    type: 'function',
    signature: 'isIssuable()',
    encoding: '0x2f1cae85',
    output_names: 'ret_0,'
  },
  {
    name: 'issue',
    type: 'function',
    signature: 'issue(address,uint256,bytes)',
    encoding: '0xbb3acde9',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'redeem',
    type: 'function',
    signature: 'redeem(uint256,bytes)',
    encoding: '0xe77c646d',
    input_names: '_value,_data,'
  },
  {
    name: 'redeemFrom',
    type: 'function',
    signature: 'redeemFrom(address,uint256,bytes)',
    encoding: '0x9675193c',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'transferFromWithData',
    type: 'function',
    signature: 'transferFromWithData(address,address,uint256,bytes)',
    encoding: '0xee532f31',
    input_names: '_from,_to,_value,_data,'
  },
  {
    name: 'transferWithData',
    type: 'function',
    signature: 'transferWithData(address,uint256,bytes)',
    encoding: '0x2535f762',
    input_names: '_to,_value,_data,'
  },
  {
    name: 'Issued',
    type: 'event',
    signature: 'Issued(address,address,uint256,bytes)',
    encoding: '0x0e9905d62635f049c2f4e11678ebf9dc3d1f8c4a653e290759b772e47ba00d00',
    input_names: '_operator,_to,_value,_data,'
  },
  {
    name: 'Redeemed',
    type: 'event',
    signature: 'Redeemed(address,address,uint256,bytes)',
    encoding: '0xb7d0d6b60740753e9f16692a2f479472a1385aec2420fa43225b02f2ffa1afe7',
    input_names: '_operator,_from,_value,_data,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'canImplementInterfaceForAddress',
    type: 'function',
    signature: 'canImplementInterfaceForAddress(bytes32,address)',
    encoding: '0x249cb3fa',
    input_names: 'interfaceHash,addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'getInterfaceImplementer',
    type: 'function',
    signature: 'getInterfaceImplementer(address,bytes32)',
    encoding: '0xaabbb8ca',
    input_names: '_addr,_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'getManager',
    type: 'function',
    signature: 'getManager(address)',
    encoding: '0x3d584063',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165Interface',
    type: 'function',
    signature: 'implementsERC165Interface(address,bytes4)',
    encoding: '0xf712f3e8',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165InterfaceNoCache',
    type: 'function',
    signature: 'implementsERC165InterfaceNoCache(address,bytes4)',
    encoding: '0xb7056765',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'interfaceHash',
    type: 'function',
    signature: 'interfaceHash(string)',
    encoding: '0x65ba36c1',
    input_names: '_interfaceName,',
    output_names: 'ret_0,'
  },
  {
    name: 'isERC165Interface',
    type: 'function',
    signature: 'isERC165Interface(bytes32)',
    encoding: '0x9d4cf268',
    input_names: '_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'noThrowCall',
    type: 'function',
    signature: 'noThrowCall(address,bytes4)',
    encoding: '0xf86cd33d',
    input_names: '_contract,_interfaceId,',
    output_names: 'success,result,'
  },
  {
    name: 'setInterfaceImplementer',
    type: 'function',
    signature: 'setInterfaceImplementer(address,bytes32,address)',
    encoding: '0x29965a1d',
    input_names: '_addr,_interfaceHash,_implementer,'
  },
  {
    name: 'setManager',
    type: 'function',
    signature: 'setManager(address,address)',
    encoding: '0x5df8122f',
    input_names: '_addr,_newManager,'
  },
  {
    name: 'updateERC165Cache',
    type: 'function',
    signature: 'updateERC165Cache(address,bytes4)',
    encoding: '0xa41e7d51',
    input_names: '_contract,_interfaceId,'
  },
  {
    name: 'InterfaceImplementerSet',
    type: 'event',
    signature: 'InterfaceImplementerSet(address,bytes32,address)',
    encoding: '0x93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db153',
    input_names: 'addr,interfaceHash,implementer,'
  },
  {
    name: 'ManagerChanged',
    type: 'event',
    signature: 'ManagerChanged(address,address)',
    encoding: '0x605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a4350',
    input_names: 'addr,newManager,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'ret_0,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: '_name,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_tokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: '_symbol,'
  },
  {
    name: 'tokenURI',
    type: 'function',
    signature: 'tokenURI(uint256)',
    encoding: '0xc87b56dd',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_approved,_tokenId,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'authorizeOperator',
    type: 'function',
    signature: 'authorizeOperator(address)',
    encoding: '0x959b8c3f',
    input_names: 'operator,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: 'holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'burn',
    type: 'function',
    signature: 'burn(uint256,bytes)',
    encoding: '0xfe9d9303',
    input_names: 'amount,data,'
  },
  {
    name: 'defaultOperators',
    type: 'function',
    signature: 'defaultOperators()',
    encoding: '0x06e48538',
    output_names: 'memory,'
  },
  {
    name: 'granularity',
    type: 'function',
    signature: 'granularity()',
    encoding: '0x556f0dc7',
    output_names: 'ret_0,'
  },
  {
    name: 'isOperatorFor',
    type: 'function',
    signature: 'isOperatorFor(address,address)',
    encoding: '0xd95b6371',
    input_names: 'operator,holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'memory,'
  },
  {
    name: 'operatorBurn',
    type: 'function',
    signature: 'operatorBurn(address,uint256,bytes,bytes)',
    encoding: '0xfc673c4f',
    input_names: 'from,amount,data,operatorData,'
  },
  {
    name: 'operatorSend',
    type: 'function',
    signature: 'operatorSend(address,address,uint256,bytes,bytes)',
    encoding: '0x62ad1b83',
    input_names: 'from,to,amount,data,operatorData,'
  },
  {
    name: 'revokeOperator',
    type: 'function',
    signature: 'revokeOperator(address)',
    encoding: '0xfad8b32a',
    input_names: 'operator,'
  },
  {
    name: 'send',
    type: 'function',
    signature: 'send(address,uint256,bytes)',
    encoding: '0x9bd9bbc6',
    input_names: 'to,amount,data,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'memory,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'ret_0,'
  },
  {
    name: 'AuthorizedOperator',
    type: 'event',
    signature: 'AuthorizedOperator(address,address)',
    encoding: '0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9',
    input_names: 'operator,holder,'
  },
  {
    name: 'Burned',
    type: 'event',
    signature: 'Burned(address,address,uint256,bytes,bytes)',
    encoding: '0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098',
    input_names: 'operator,from,amount,data,operatorData,'
  },
  {
    name: 'Minted',
    type: 'event',
    signature: 'Minted(address,address,uint256,bytes,bytes)',
    encoding: '0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d',
    input_names: 'operator,to,amount,data,operatorData,'
  },
  {
    name: 'RevokedOperator',
    type: 'event',
    signature: 'RevokedOperator(address,address)',
    encoding: '0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1',
    input_names: 'operator,holder,'
  },
  {
    name: 'Sent',
    type: 'event',
    signature: 'Sent(address,address,address,uint256,bytes,bytes)',
    encoding: '0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987',
    input_names: 'operator,from,to,amount,data,operatorData,'
  },
  {
    name: '_ownerOfChild',
    type: 'function',
    signature: '_ownerOfChild(address,uint256)',
    encoding: '0xa5aeb1d4',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: '_transferFrom',
    type: 'function',
    signature: '_transferFrom(address,address,uint256)',
    encoding: '0xcb712535',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'remaining,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_tokenOwner,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfERC20',
    type: 'function',
    signature: 'balanceOfERC20(uint256,address)',
    encoding: '0xe226ed22',
    input_names: '_tokenId,__erc20Contract,',
    output_names: 'ret_0,'
  },
  {
    name: 'childContractByIndex',
    type: 'function',
    signature: 'childContractByIndex(uint256,uint256)',
    encoding: '0x0d5a621b',
    input_names: '_tokenId,_index,',
    output_names: 'childContract,'
  },
  {
    name: 'childExists',
    type: 'function',
    signature: 'childExists(address,uint256)',
    encoding: '0x5680a3ad',
    input_names: '_childContract,_childTokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'childTokenByIndex',
    type: 'function',
    signature: 'childTokenByIndex(uint256,address,uint256)',
    encoding: '0x160b01a1',
    input_names: '_tokenId,_childContract,_index,',
    output_names: 'childTokenId,'
  },
  {
    name: 'erc20ContractByIndex',
    type: 'function',
    signature: 'erc20ContractByIndex(uint256,uint256)',
    encoding: '0x627c81ff',
    input_names: '_tokenId,_index,',
    output_names: 'ret_0,'
  },
  {
    name: 'erc20Received',
    type: 'function',
    signature: 'erc20Received(address,uint256,address,uint256)',
    encoding: '0x9e95670d',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'getChild',
    type: 'function',
    signature: 'getChild(address,uint256,address,uint256)',
    encoding: '0xba6b5f96',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'getERC20',
    type: 'function',
    signature: 'getERC20(address,uint256,address,uint256)',
    encoding: '0x07cff6f2',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(address)',
    encoding: '0x6a627842',
    input_names: '_to,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,uint256,bytes)',
    encoding: '0xf0b9e5ba',
    input_names: '_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'tokenOwner,'
  },
  {
    name: 'ownerOfChild',
    type: 'function',
    signature: 'ownerOfChild(address,uint256)',
    encoding: '0xeadb80b8',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: 'receiveChild',
    type: 'function',
    signature: 'receiveChild(address,uint256,address,uint256)',
    encoding: '0x597c255f',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeChild',
    type: 'function',
    signature: 'removeChild(uint256,address,uint256)',
    encoding: '0x0f0ba766',
    input_names: '_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeERC20',
    type: 'function',
    signature: 'removeERC20(uint256,address,uint256)',
    encoding: '0x9771ccc8',
    input_names: '_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'rootOwnerOf',
    type: 'function',
    signature: 'rootOwnerOf(uint256)',
    encoding: '0x43a61a8e',
    input_names: '_tokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'rootOwnerOfChild',
    type: 'function',
    signature: 'rootOwnerOfChild(address,uint256)',
    encoding: '0xed81cdda',
    input_names: '_childContract,_childTokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256)',
    encoding: '0x1d98f3c5',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256,bytes)',
    encoding: '0x8d81f51e',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'tokenFallback',
    type: 'function',
    signature: 'tokenFallback(address,uint256,bytes)',
    encoding: '0xc0ee0b8a',
    input_names: '_from,_value,_data,'
  },
  {
    name: 'totalChildContracts',
    type: 'function',
    signature: 'totalChildContracts(uint256)',
    encoding: '0x8da7d0b5',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalChildTokens',
    type: 'function',
    signature: 'totalChildTokens(uint256,address)',
    encoding: '0x35b21ceb',
    input_names: '_tokenId,_childContract,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalERC20Contracts',
    type: 'function',
    signature: 'totalERC20Contracts(uint256)',
    encoding: '0xa7811732',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: 'to,value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256,bytes)',
    encoding: '0xbe45fd62',
    input_names: 'to,value,data,',
    output_names: 'success,'
  },
  {
    name: 'transferChild',
    type: 'function',
    signature: 'transferChild(uint256,address,address,uint256)',
    encoding: '0xbef44f18',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'transferChildToParent',
    type: 'function',
    signature: 'transferChildToParent(uint256,address,uint256,address,uint256,bytes)',
    encoding: '0x08937f62',
    input_names: '_fromTokenId,_toContract,_toTokenId,_childContract,_childTokenId,_data,'
  },
  {
    name: 'transferERC20',
    type: 'function',
    signature: 'transferERC20(uint256,address,address,uint256)',
    encoding: '0x830ef41b',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'transferERC223',
    type: 'function',
    signature: 'transferERC223(uint256,address,address,uint256,bytes)',
    encoding: '0xd49d1bac',
    input_names: '_tokenId,_to,_erc223Contract,_value,_data,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferToParent',
    type: 'function',
    signature: 'transferToParent(address,address,uint256,uint256,bytes)',
    encoding: '0xf50acfa0',
    input_names: '_from,_toContract,_toTokenId,_tokenId,_data,'
  },
  {
    name: 'ReceivedChild',
    type: 'event',
    signature: 'ReceivedChild(address,uint256,address,uint256)',
    encoding: '0x0371ddf2288ad1ba92626a7e31c86a9d006e592cfe57d7d946ef08b13457c08b',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'ReceivedERC20',
    type: 'event',
    signature: 'ReceivedERC20(address,uint256,address,uint256)',
    encoding: '0x684ce28ace37552c6bfb98b7cceda8ed55327078eafb5dfb31218e0856382763',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'TransferChild',
    type: 'event',
    signature: 'TransferChild(uint256,address,address,uint256)',
    encoding: '0x0ef52e516fb5aec15a5d3587e5480481b702b26db93c8430eca78b61990fd3f6',
    input_names: 'tokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'TransferERC20',
    type: 'event',
    signature: 'TransferERC20(uint256,address,address,uint256)',
    encoding: '0xa8352277873fc0d2b233b8127433da351a4164fa701ed6ff79655694222932c4',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'authority',
    type: 'function',
    signature: 'authority()',
    encoding: '0xbf7e214f',
    output_names: 'val_0,'
  },
  {
    name: 'compute',
    type: 'function',
    signature: 'compute()',
    encoding: '0x1a43c338',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'indexes',
    type: 'function',
    signature: 'indexes(address)',
    encoding: '0x2db78d93',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'min',
    type: 'function',
    signature: 'min()',
    encoding: '0xf8897945',
    output_names: 'val_0,'
  },
  {
    name: 'next',
    type: 'function',
    signature: 'next()',
    encoding: '0x4c8fe526',
    output_names: 'val_0,'
  },
  {
    name: 'owner',
    type: 'function',
    signature: 'owner()',
    encoding: '0x8da5cb5b',
    output_names: 'val_0,'
  },
  {
    name: 'peek',
    type: 'function',
    signature: 'peek()',
    encoding: '0x59e02dd7',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke(bytes32)',
    encoding: '0x1504460f',
    input_names: 'val_0,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke()',
    encoding: '0x18178358'
  },
  {
    name: 'read',
    type: 'function',
    signature: 'read()',
    encoding: '0x57de26a4',
    output_names: 'val_0,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(address)',
    encoding: '0x2801617e',
    input_names: 'wat,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(bytes12,address)',
    encoding: '0xbeb38b43',
    input_names: 'pos,wat,'
  },
  {
    name: 'setAuthority',
    type: 'function',
    signature: 'setAuthority(address)',
    encoding: '0x7a9e5e4b',
    input_names: 'authority_,'
  },
  {
    name: 'setMin',
    type: 'function',
    signature: 'setMin(uint96)',
    encoding: '0x6ba5ef0d',
    input_names: 'min_,'
  },
  {
    name: 'setNext',
    type: 'function',
    signature: 'setNext(bytes12)',
    encoding: '0xf2c5925d',
    input_names: 'next_,'
  },
  {
    name: 'setOwner',
    type: 'function',
    signature: 'setOwner(address)',
    encoding: '0x13af4035',
    input_names: 'owner_,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(address)',
    encoding: '0x2966d1b9',
    input_names: 'wat,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(bytes12)',
    encoding: '0xe0a1fdad',
    input_names: 'pos,'
  },
  {
    name: 'values',
    type: 'function',
    signature: 'values(bytes12)',
    encoding: '0x651dd0de',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'void',
    type: 'function',
    signature: 'void()',
    encoding: '0xac4c25b2'
  },
  {
    name: 'LogNote',
    type: 'event',
    signature: 'LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)',
    encoding: '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31',
    input_names: 'sig,guy,foo,bar,wad,fax,'
  },
  {
    name: 'LogSetAuthority',
    type: 'event',
    signature: 'LogSetAuthority(address)',
    encoding: '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4',
    input_names: 'authority,'
  },
  {
    name: 'LogSetOwner',
    type: 'event',
    signature: 'LogSetOwner(address)',
    encoding: '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94',
    input_names: 'owner,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    name: '__default__',
    type: 'function',
    signature: '__default__()',
    encoding: '0x89402a72'
  },
  {
    name: 'addLiquidity',
    type: 'function',
    signature: 'addLiquidity(uint256,uint256,uint256)',
    encoding: '0x422f1043',
    input_names: 'min_liquidity,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'out,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'out,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'out,'
  },
  {
    name: 'decimals',
    type: 'function',
    signature: 'decimals()',
    encoding: '0x313ce567',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapInput',
    type: 'function',
    signature: 'ethToTokenSwapInput(uint256,uint256)',
    encoding: '0xf39b5b9b',
    input_names: 'min_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapOutput',
    type: 'function',
    signature: 'ethToTokenSwapOutput(uint256,uint256)',
    encoding: '0x6b1d4db7',
    input_names: 'tokens_bought,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferInput',
    type: 'function',
    signature: 'ethToTokenTransferInput(uint256,uint256,address)',
    encoding: '0xad65d76d',
    input_names: 'min_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferOutput',
    type: 'function',
    signature: 'ethToTokenTransferOutput(uint256,uint256,address)',
    encoding: '0x0b573638',
    input_names: 'tokens_bought,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'factoryAddress',
    type: 'function',
    signature: 'factoryAddress()',
    encoding: '0x966dae0e',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenInputPrice',
    type: 'function',
    signature: 'getEthToTokenInputPrice(uint256)',
    encoding: '0xcd7724c3',
    input_names: 'eth_sold,',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenOutputPrice',
    type: 'function',
    signature: 'getEthToTokenOutputPrice(uint256)',
    encoding: '0x59e94862',
    input_names: 'tokens_bought,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthInputPrice',
    type: 'function',
    signature: 'getTokenToEthInputPrice(uint256)',
    encoding: '0x95b68fe7',
    input_names: 'tokens_sold,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthOutputPrice',
    type: 'function',
    signature: 'getTokenToEthOutputPrice(uint256)',
    encoding: '0x2640f62c',
    input_names: 'eth_bought,',
    output_names: 'out,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'out,'
  },
  {
    name: 'removeLiquidity',
    type: 'function',
    signature: 'removeLiquidity(uint256,uint256,uint256,uint256)',
    encoding: '0xf88bf15a',
    input_names: 'amount,min_eth,min_tokens,deadline,',
    output_names: 'out,out,'
  },
  {
    name: 'setup',
    type: 'function',
    signature: 'setup(address)',
    encoding: '0x66d38203',
    input_names: 'token_addr,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'out,'
  },
  {
    name: 'tokenAddress',
    type: 'function',
    signature: 'tokenAddress()',
    encoding: '0x9d76ea58',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapInput',
    type: 'function',
    signature: 'tokenToEthSwapInput(uint256,uint256,uint256)',
    encoding: '0x95e3c50b',
    input_names: 'tokens_sold,min_eth,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapOutput',
    type: 'function',
    signature: 'tokenToEthSwapOutput(uint256,uint256,uint256)',
    encoding: '0x013efd8b',
    input_names: 'eth_bought,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferInput',
    type: 'function',
    signature: 'tokenToEthTransferInput(uint256,uint256,uint256,address)',
    encoding: '0x7237e031',
    input_names: 'tokens_sold,min_eth,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferOutput',
    type: 'function',
    signature: 'tokenToEthTransferOutput(uint256,uint256,uint256,address)',
    encoding: '0xd4e4841d',
    input_names: 'eth_bought,max_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapInput',
    type: 'function',
    signature: 'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb1cb43bf',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapOutput',
    type: 'function',
    signature: 'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xea650c7d',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferInput',
    type: 'function',
    signature: 'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xec384a3e',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferOutput',
    type: 'function',
    signature: 'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0x981a1327',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapInput',
    type: 'function',
    signature: 'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xddf7e1a7',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapOutput',
    type: 'function',
    signature: 'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb040d545',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferInput',
    type: 'function',
    signature: 'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf552d91b',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferOutput',
    type: 'function',
    signature: 'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf3c0efe9',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'out,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'AddLiquidity',
    type: 'event',
    signature: 'AddLiquidity(address,uint256,uint256)',
    encoding: '0x06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'EthPurchase',
    type: 'event',
    signature: 'EthPurchase(address,uint256,uint256)',
    encoding: '0x7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b353984238705',
    input_names: 'buyer,tokens_sold,eth_bought,'
  },
  {
    name: 'RemoveLiquidity',
    type: 'event',
    signature: 'RemoveLiquidity(address,uint256,uint256)',
    encoding: '0x0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e8',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'TokenPurchase',
    type: 'event',
    signature: 'TokenPurchase(address,uint256,uint256)',
    encoding: '0xcd60aa75dea3072fbc07ae6d7d856b5dc5f4eee88854f5b4abf7b680ef8bc50f',
    input_names: 'buyer,eth_sold,tokens_bought,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256,uint256)',
    encoding: '0xaf8342fe',
    input_names: '_owners,_required,_daylimit,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256)',
    encoding: '0xfcd52c14',
    input_names: '_owners,_required,'
  },
  {
    type: 'fallback',
    signature: '()',
    encoding: '0x861731d5'
  },
  {
    name: 'MAX_OWNER_COUNT',
    type: 'function',
    signature: 'MAX_OWNER_COUNT()',
    encoding: '0xd74f8edd',
    output_names: 'val_0,'
  },
  {
    name: 'addOwner',
    type: 'function',
    signature: 'addOwner(address)',
    encoding: '0x7065cb48',
    input_names: '_owner,'
  },
  {
    name: 'changeOwner',
    type: 'function',
    signature: 'changeOwner(address,address)',
    encoding: '0xf00d4b5d',
    input_names: '_from,_to,'
  },
  {
    name: 'changeRequirement',
    type: 'function',
    signature: 'changeRequirement(uint256)',
    encoding: '0xba51a6df',
    input_names: '_newRequired,'
  },
  {
    name: 'confirm',
    type: 'function',
    signature: 'confirm(bytes32)',
    encoding: '0x797af627',
    input_names: '_h,',
    output_names: 'val_0,'
  },
  {
    name: 'confirmTransaction',
    type: 'function',
    signature: 'confirmTransaction(uint256)',
    encoding: '0xc01a8c84',
    input_names: 'transactionId,'
  },
  {
    name: 'confirmations',
    type: 'function',
    signature: 'confirmations(uint256,address)',
    encoding: '0x3411c81c',
    input_names: 'val_0,val_1,',
    output_names: 'val_0,'
  },
  {
    name: 'execute',
    type: 'function',
    signature: 'execute(address,uint256,bytes)',
    encoding: '0xb61d27f6',
    input_names: '_to,_value,_data,',
    output_names: '_r,'
  },
  {
    name: 'executeTransaction',
    type: 'function',
    signature: 'executeTransaction(uint256)',
    encoding: '0xee22610b',
    input_names: 'transactionId,'
  },
  {
    name: 'getConfirmationCount',
    type: 'function',
    signature: 'getConfirmationCount(uint256)',
    encoding: '0x8b51d13f',
    input_names: 'transactionId,',
    output_names: 'count,'
  },
  {
    name: 'getConfirmations',
    type: 'function',
    signature: 'getConfirmations(uint256)',
    encoding: '0xb5dc40c3',
    input_names: 'transactionId,',
    output_names: '_confirmations,'
  },
  {
    name: 'getOwners',
    type: 'function',
    signature: 'getOwners()',
    encoding: '0xa0e67e2b',
    output_names: 'val_0,'
  },
  {
    name: 'getTransactionCount',
    type: 'function',
    signature: 'getTransactionCount(bool,bool)',
    encoding: '0x54741525',
    input_names: 'pending,executed,',
    output_names: 'count,'
  },
  {
    name: 'getTransactionIds',
    type: 'function',
    signature: 'getTransactionIds(uint256,uint256,bool,bool)',
    encoding: '0xa8abe69a',
    input_names: 'from,to,pending,executed,',
    output_names: '_transactionIds,'
  },
  {
    name: 'hasConfirmed',
    type: 'function',
    signature: 'hasConfirmed(bytes32,address)',
    encoding: '0xc2cf7326',
    input_names: '_operation,_owner,',
    output_names: 'val_0,'
  },
  {
    name: 'isConfirmed',
    type: 'function',
    signature: 'isConfirmed(uint256)',
    encoding: '0x784547a7',
    input_names: 'transactionId,',
    output_names: 'val_0,'
  },
  {
    name: 'isOwner',
    type: 'function',
    signature: 'isOwner(address)',
    encoding: '0x2f54bf6e',
    input_names: '_addr,',
    output_names: 'val_0,'
  },
  {
    name: 'kill',
    type: 'function',
    signature: 'kill(address)',
    encoding: '0xcbf0b0c0',
    input_names: '_to,'
  },
  {
    name: 'm_dailyLimit',
    type: 'function',
    signature: 'm_dailyLimit()',
    encoding: '0xf1736d86',
    output_names: 'val_0,'
  },
  {
    name: 'm_numOwners',
    type: 'function',
    signature: 'm_numOwners()',
    encoding: '0x4123cb6b',
    output_names: 'val_0,'
  },
  {
    name: 'm_required',
    type: 'function',
    signature: 'm_required()',
    encoding: '0x746c9171',
    output_names: 'val_0,'
  },
  {
    name: 'owners',
    type: 'function',
    signature: 'owners(uint256)',
    encoding: '0x025e7c27',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'removeOwner',
    type: 'function',
    signature: 'removeOwner(address)',
    encoding: '0x173825d9',
    input_names: '_owner,'
  },
  {
    name: 'replaceOwner',
    type: 'function',
    signature: 'replaceOwner(address,address)',
    encoding: '0xe20056e6',
    input_names: 'owner,newOwner,'
  },
  {
    name: 'required',
    type: 'function',
    signature: 'required()',
    encoding: '0xdc8452cd',
    output_names: 'val_0,'
  },
  {
    name: 'resetSpentToday',
    type: 'function',
    signature: 'resetSpentToday()',
    encoding: '0x5c52c2f5'
  },
  {
    name: 'revoke',
    type: 'function',
    signature: 'revoke(bytes32)',
    encoding: '0xb75c7dc6',
    input_names: '_operation,'
  },
  {
    name: 'revokeConfirmation',
    type: 'function',
    signature: 'revokeConfirmation(uint256)',
    encoding: '0x20ea8d86',
    input_names: 'transactionId,'
  },
  {
    name: 'setDailyLimit',
    type: 'function',
    signature: 'setDailyLimit(uint256)',
    encoding: '0xb20d30a9',
    input_names: '_newLimit,'
  },
  {
    name: 'submitTransaction',
    type: 'function',
    signature: 'submitTransaction(address,uint256,bytes)',
    encoding: '0xc6427474',
    input_names: 'destination,value,data,',
    output_names: 'transactionId,'
  },
  {
    name: 'transactionCount',
    type: 'function',
    signature: 'transactionCount()',
    encoding: '0xb77bf600',
    output_names: 'val_0,'
  },
  {
    name: 'transactions',
    type: 'function',
    signature: 'transactions(uint256)',
    encoding: '0x9ace38c2',
    input_names: 'val_0,',
    output_names: 'destination,value,data,executed,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,uint256)',
    encoding: '0x4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,bytes32)',
    encoding: '0xe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda',
    input_names: 'owner,operation,'
  },
  {
    name: 'ConfirmationNeeded',
    type: 'event',
    signature: 'ConfirmationNeeded(bytes32,address,uint256,address,bytes)',
    encoding: '0x1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32',
    input_names: 'operation,initiator,value,to,data,'
  },
  {
    name: 'Deposit',
    type: 'event',
    signature: 'Deposit(address,uint256)',
    encoding: '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c',
    input_names: 'from,value,'
  },
  {
    name: 'Execution',
    type: 'event',
    signature: 'Execution(uint256)',
    encoding: '0x33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed75',
    input_names: '_transactionId,'
  },
  {
    name: 'ExecutionFailure',
    type: 'event',
    signature: 'ExecutionFailure(uint256)',
    encoding: '0x526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b79236',
    input_names: '_transactionId,'
  },
  {
    name: 'MultiTransact',
    type: 'event',
    signature: 'MultiTransact(address,bytes32,uint256,address,bytes)',
    encoding: '0xe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a',
    input_names: 'owner,operation,value,to,data,'
  },
  {
    name: 'OwnerAdded',
    type: 'event',
    signature: 'OwnerAdded(address)',
    encoding: '0x994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3',
    input_names: 'newOwner,'
  },
  {
    name: 'OwnerAddition',
    type: 'event',
    signature: 'OwnerAddition(address)',
    encoding: '0xf39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d',
    input_names: '_owner,'
  },
  {
    name: 'OwnerChanged',
    type: 'event',
    signature: 'OwnerChanged(address,address)',
    encoding: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
    input_names: 'oldOwner,newOwner,'
  },
  {
    name: 'OwnerRemoval',
    type: 'event',
    signature: 'OwnerRemoval(address)',
    encoding: '0x8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b90',
    input_names: '_owner,'
  },
  {
    name: 'OwnerRemoved',
    type: 'event',
    signature: 'OwnerRemoved(address)',
    encoding: '0x58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da',
    input_names: 'oldOwner,'
  },
  {
    name: 'RequirementChange',
    type: 'event',
    signature: 'RequirementChange(uint256)',
    encoding: '0xa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a',
    input_names: '_required,'
  },
  {
    name: 'RequirementChanged',
    type: 'event',
    signature: 'RequirementChanged(uint256)',
    encoding: '0xacbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da',
    input_names: 'newRequirement,'
  },
  {
    name: 'Revocation',
    type: 'event',
    signature: 'Revocation(address,uint256)',
    encoding: '0xf6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e9',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Revoke',
    type: 'event',
    signature: 'Revoke(address,bytes32)',
    encoding: '0xc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b',
    input_names: 'owner,operation,'
  },
  {
    name: 'SingleTransact',
    type: 'event',
    signature: 'SingleTransact(address,uint256,address,bytes)',
    encoding: '0x92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd004',
    input_names: 'owner,value,to,data,'
  },
  {
    name: 'Submission',
    type: 'event',
    signature: 'Submission(uint256)',
    encoding: '0xc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e51',
    input_names: '_transactionId,'
  },
  {
    name: '_doSafeBatchTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)',
    encoding: '0xe51c223d',
    input_names: '_operator,_from,_to,_ids,_values,_data,'
  },
  {
    name: '_doSafeTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)',
    encoding: '0x084e9e24',
    input_names: '_operator,_from,_to,_id,_value,_data,'
  },
  {
    name: 'add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address,uint256)',
    encoding: '0x00fdd58e',
    input_names: '_owner,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfBatch',
    type: 'function',
    signature: 'balanceOfBatch(address[],uint256[])',
    encoding: '0x4e1273f4',
    input_names: '_owners,_ids,',
    output_names: 'memory,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(uint256,string)',
    encoding: '0x0118fa49',
    input_names: '_initialSupply,_uri,',
    output_names: '_id,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(string,bool)',
    encoding: '0xcc10e401',
    input_names: '_uri,_isNF,',
    output_names: '_type,'
  },
  {
    name: 'div',
    type: 'function',
    signature: 'div(uint256,uint256)',
    encoding: '0xa391c15b',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleBaseType',
    type: 'function',
    signature: 'getNonFungibleBaseType(uint256)',
    encoding: '0x6f969c2d',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleIndex',
    type: 'function',
    signature: 'getNonFungibleIndex(uint256)',
    encoding: '0x9cca1c64',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: 'account,',
    output_names: 'ret_0,'
  },
  {
    name: 'isFungible',
    type: 'function',
    signature: 'isFungible(uint256)',
    encoding: '0xadebf6f2',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungible',
    type: 'function',
    signature: 'isNonFungible(uint256)',
    encoding: '0xe44591f0',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleBaseType',
    type: 'function',
    signature: 'isNonFungibleBaseType(uint256)',
    encoding: '0x7269a327',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleItem',
    type: 'function',
    signature: 'isNonFungibleItem(uint256)',
    encoding: '0x5e81b958',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(uint256,address[],uint256[])',
    encoding: '0xcfa84fc1',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintFungible',
    type: 'function',
    signature: 'mintFungible(uint256,address[],uint256[])',
    encoding: '0x78b27221',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintNonFungible',
    type: 'function',
    signature: 'mintNonFungible(uint256,address[])',
    encoding: '0xf9419088',
    input_names: '_type,_to,'
  },
  {
    name: 'mul',
    type: 'function',
    signature: 'mul(uint256,uint256)',
    encoding: '0xc8a4ac9c',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'onERC1155BatchReceived',
    type: 'function',
    signature: 'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xbc197c81',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC1155Received',
    type: 'function',
    signature: 'onERC1155Received(address,address,uint256,uint256,bytes)',
    encoding: '0xf23a6e61',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXBatchReceived',
    type: 'function',
    signature: 'onERCXXXXBatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xe9e5be6a',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXReceived',
    type: 'function',
    signature: 'onERCXXXXReceived(address,address,uint256,uint256,bytes)',
    encoding: '0xeb510be8',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeBatchTransferFrom',
    type: 'function',
    signature: 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    encoding: '0x2eb2c2d6',
    input_names: '_from,_to,_ids,_values,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,uint256,bytes)',
    encoding: '0xf242432a',
    input_names: '_from,_to,_id,_value,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'setCompleted',
    type: 'function',
    signature: 'setCompleted(uint256)',
    encoding: '0xfdacd576',
    input_names: 'completed,'
  },
  {
    name: 'setShouldReject',
    type: 'function',
    signature: 'setShouldReject(bool)',
    encoding: '0xa175b638',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectClash',
    type: 'function',
    signature: 'setShouldRejectClash(bool)',
    encoding: '0x2090dd24',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectXXXX',
    type: 'function',
    signature: 'setShouldRejectXXXX(bool)',
    encoding: '0x80f5fe74',
    input_names: '_value,'
  },
  {
    name: 'setURI',
    type: 'function',
    signature: 'setURI(string,uint256)',
    encoding: '0x67db3b8f',
    input_names: '_uri,_id,'
  },
  {
    name: 'sub',
    type: 'function',
    signature: 'sub(uint256,uint256)',
    encoding: '0xb67d77c5',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'updateContract',
    type: 'function',
    signature: 'updateContract(address,string,string)',
    encoding: '0x61455567',
    input_names: '_delegate,_functionSignatures,_commitMessage,'
  },
  {
    name: 'upgrade',
    type: 'function',
    signature: 'upgrade(address)',
    encoding: '0x0900f010',
    input_names: 'new_address,'
  },
  {
    name: 'uri',
    type: 'function',
    signature: 'uri(uint256)',
    encoding: '0x0e89341c',
    input_names: '_id,',
    output_names: 'memory,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256,uint256,uint256)',
    encoding: '0x3a9c85c6b31f7a9d7fe1478f53e1be42e85db97ca30d1789cfef9196dbc472c9',
    input_names: '_owner,_spender,_id,_oldValue,_value,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'CommitMessage',
    type: 'event',
    signature: 'CommitMessage(string)',
    encoding: '0xaa1c0a0a78cec2470f9652e5d29540752e7a64d70f926933cebf13afaeda45de',
    input_names: 'message,'
  },
  {
    name: 'FunctionUpdate',
    type: 'event',
    signature: 'FunctionUpdate(bytes4,address,address,string)',
    encoding: '0x3234040ce3bd4564874e44810f198910133a1b24c4e84aac87edbf6b458f5353',
    input_names: 'functionId,oldDelegate,newDelegate,functionSignature,'
  },
  {
    name: 'TransferBatch',
    type: 'event',
    signature: 'TransferBatch(address,address,address,uint256[],uint256[])',
    encoding: '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
    input_names: '_operator,_from,_to,_ids,_values,'
  },
  {
    name: 'TransferSingle',
    type: 'event',
    signature: 'TransferSingle(address,address,address,uint256,uint256)',
    encoding: '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
    input_names: '_operator,_from,_to,_id,_value,'
  },
  {
    name: 'URI',
    type: 'event',
    signature: 'URI(string,uint256)',
    encoding: '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b',
    input_names: '_value,_id,'
  },
  {
    name: 'canTransfer',
    type: 'function',
    signature: 'canTransfer(address,uint256,bytes)',
    encoding: '0x1badb25c',
    input_names: '_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'canTransferFrom',
    type: 'function',
    signature: 'canTransferFrom(address,address,uint256,bytes)',
    encoding: '0x122eb575',
    input_names: '_from,_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'isIssuable',
    type: 'function',
    signature: 'isIssuable()',
    encoding: '0x2f1cae85',
    output_names: 'ret_0,'
  },
  {
    name: 'issue',
    type: 'function',
    signature: 'issue(address,uint256,bytes)',
    encoding: '0xbb3acde9',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'redeem',
    type: 'function',
    signature: 'redeem(uint256,bytes)',
    encoding: '0xe77c646d',
    input_names: '_value,_data,'
  },
  {
    name: 'redeemFrom',
    type: 'function',
    signature: 'redeemFrom(address,uint256,bytes)',
    encoding: '0x9675193c',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'transferFromWithData',
    type: 'function',
    signature: 'transferFromWithData(address,address,uint256,bytes)',
    encoding: '0xee532f31',
    input_names: '_from,_to,_value,_data,'
  },
  {
    name: 'transferWithData',
    type: 'function',
    signature: 'transferWithData(address,uint256,bytes)',
    encoding: '0x2535f762',
    input_names: '_to,_value,_data,'
  },
  {
    name: 'Issued',
    type: 'event',
    signature: 'Issued(address,address,uint256,bytes)',
    encoding: '0x0e9905d62635f049c2f4e11678ebf9dc3d1f8c4a653e290759b772e47ba00d00',
    input_names: '_operator,_to,_value,_data,'
  },
  {
    name: 'Redeemed',
    type: 'event',
    signature: 'Redeemed(address,address,uint256,bytes)',
    encoding: '0xb7d0d6b60740753e9f16692a2f479472a1385aec2420fa43225b02f2ffa1afe7',
    input_names: '_operator,_from,_value,_data,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'canImplementInterfaceForAddress',
    type: 'function',
    signature: 'canImplementInterfaceForAddress(bytes32,address)',
    encoding: '0x249cb3fa',
    input_names: 'interfaceHash,addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'getInterfaceImplementer',
    type: 'function',
    signature: 'getInterfaceImplementer(address,bytes32)',
    encoding: '0xaabbb8ca',
    input_names: '_addr,_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'getManager',
    type: 'function',
    signature: 'getManager(address)',
    encoding: '0x3d584063',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165Interface',
    type: 'function',
    signature: 'implementsERC165Interface(address,bytes4)',
    encoding: '0xf712f3e8',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165InterfaceNoCache',
    type: 'function',
    signature: 'implementsERC165InterfaceNoCache(address,bytes4)',
    encoding: '0xb7056765',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'interfaceHash',
    type: 'function',
    signature: 'interfaceHash(string)',
    encoding: '0x65ba36c1',
    input_names: '_interfaceName,',
    output_names: 'ret_0,'
  },
  {
    name: 'isERC165Interface',
    type: 'function',
    signature: 'isERC165Interface(bytes32)',
    encoding: '0x9d4cf268',
    input_names: '_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'noThrowCall',
    type: 'function',
    signature: 'noThrowCall(address,bytes4)',
    encoding: '0xf86cd33d',
    input_names: '_contract,_interfaceId,',
    output_names: 'success,result,'
  },
  {
    name: 'setInterfaceImplementer',
    type: 'function',
    signature: 'setInterfaceImplementer(address,bytes32,address)',
    encoding: '0x29965a1d',
    input_names: '_addr,_interfaceHash,_implementer,'
  },
  {
    name: 'setManager',
    type: 'function',
    signature: 'setManager(address,address)',
    encoding: '0x5df8122f',
    input_names: '_addr,_newManager,'
  },
  {
    name: 'updateERC165Cache',
    type: 'function',
    signature: 'updateERC165Cache(address,bytes4)',
    encoding: '0xa41e7d51',
    input_names: '_contract,_interfaceId,'
  },
  {
    name: 'InterfaceImplementerSet',
    type: 'event',
    signature: 'InterfaceImplementerSet(address,bytes32,address)',
    encoding: '0x93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db153',
    input_names: 'addr,interfaceHash,implementer,'
  },
  {
    name: 'ManagerChanged',
    type: 'event',
    signature: 'ManagerChanged(address,address)',
    encoding: '0x605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a4350',
    input_names: 'addr,newManager,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'ret_0,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: '_name,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_tokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: '_symbol,'
  },
  {
    name: 'tokenURI',
    type: 'function',
    signature: 'tokenURI(uint256)',
    encoding: '0xc87b56dd',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_approved,_tokenId,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'authorizeOperator',
    type: 'function',
    signature: 'authorizeOperator(address)',
    encoding: '0x959b8c3f',
    input_names: 'operator,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: 'holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'burn',
    type: 'function',
    signature: 'burn(uint256,bytes)',
    encoding: '0xfe9d9303',
    input_names: 'amount,data,'
  },
  {
    name: 'defaultOperators',
    type: 'function',
    signature: 'defaultOperators()',
    encoding: '0x06e48538',
    output_names: 'memory,'
  },
  {
    name: 'granularity',
    type: 'function',
    signature: 'granularity()',
    encoding: '0x556f0dc7',
    output_names: 'ret_0,'
  },
  {
    name: 'isOperatorFor',
    type: 'function',
    signature: 'isOperatorFor(address,address)',
    encoding: '0xd95b6371',
    input_names: 'operator,holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'memory,'
  },
  {
    name: 'operatorBurn',
    type: 'function',
    signature: 'operatorBurn(address,uint256,bytes,bytes)',
    encoding: '0xfc673c4f',
    input_names: 'from,amount,data,operatorData,'
  },
  {
    name: 'operatorSend',
    type: 'function',
    signature: 'operatorSend(address,address,uint256,bytes,bytes)',
    encoding: '0x62ad1b83',
    input_names: 'from,to,amount,data,operatorData,'
  },
  {
    name: 'revokeOperator',
    type: 'function',
    signature: 'revokeOperator(address)',
    encoding: '0xfad8b32a',
    input_names: 'operator,'
  },
  {
    name: 'send',
    type: 'function',
    signature: 'send(address,uint256,bytes)',
    encoding: '0x9bd9bbc6',
    input_names: 'to,amount,data,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'memory,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'ret_0,'
  },
  {
    name: 'AuthorizedOperator',
    type: 'event',
    signature: 'AuthorizedOperator(address,address)',
    encoding: '0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9',
    input_names: 'operator,holder,'
  },
  {
    name: 'Burned',
    type: 'event',
    signature: 'Burned(address,address,uint256,bytes,bytes)',
    encoding: '0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098',
    input_names: 'operator,from,amount,data,operatorData,'
  },
  {
    name: 'Minted',
    type: 'event',
    signature: 'Minted(address,address,uint256,bytes,bytes)',
    encoding: '0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d',
    input_names: 'operator,to,amount,data,operatorData,'
  },
  {
    name: 'RevokedOperator',
    type: 'event',
    signature: 'RevokedOperator(address,address)',
    encoding: '0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1',
    input_names: 'operator,holder,'
  },
  {
    name: 'Sent',
    type: 'event',
    signature: 'Sent(address,address,address,uint256,bytes,bytes)',
    encoding: '0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987',
    input_names: 'operator,from,to,amount,data,operatorData,'
  },
  {
    name: '_ownerOfChild',
    type: 'function',
    signature: '_ownerOfChild(address,uint256)',
    encoding: '0xa5aeb1d4',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: '_transferFrom',
    type: 'function',
    signature: '_transferFrom(address,address,uint256)',
    encoding: '0xcb712535',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'remaining,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_tokenOwner,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfERC20',
    type: 'function',
    signature: 'balanceOfERC20(uint256,address)',
    encoding: '0xe226ed22',
    input_names: '_tokenId,__erc20Contract,',
    output_names: 'ret_0,'
  },
  {
    name: 'childContractByIndex',
    type: 'function',
    signature: 'childContractByIndex(uint256,uint256)',
    encoding: '0x0d5a621b',
    input_names: '_tokenId,_index,',
    output_names: 'childContract,'
  },
  {
    name: 'childExists',
    type: 'function',
    signature: 'childExists(address,uint256)',
    encoding: '0x5680a3ad',
    input_names: '_childContract,_childTokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'childTokenByIndex',
    type: 'function',
    signature: 'childTokenByIndex(uint256,address,uint256)',
    encoding: '0x160b01a1',
    input_names: '_tokenId,_childContract,_index,',
    output_names: 'childTokenId,'
  },
  {
    name: 'erc20ContractByIndex',
    type: 'function',
    signature: 'erc20ContractByIndex(uint256,uint256)',
    encoding: '0x627c81ff',
    input_names: '_tokenId,_index,',
    output_names: 'ret_0,'
  },
  {
    name: 'erc20Received',
    type: 'function',
    signature: 'erc20Received(address,uint256,address,uint256)',
    encoding: '0x9e95670d',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'getChild',
    type: 'function',
    signature: 'getChild(address,uint256,address,uint256)',
    encoding: '0xba6b5f96',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'getERC20',
    type: 'function',
    signature: 'getERC20(address,uint256,address,uint256)',
    encoding: '0x07cff6f2',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(address)',
    encoding: '0x6a627842',
    input_names: '_to,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,uint256,bytes)',
    encoding: '0xf0b9e5ba',
    input_names: '_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'tokenOwner,'
  },
  {
    name: 'ownerOfChild',
    type: 'function',
    signature: 'ownerOfChild(address,uint256)',
    encoding: '0xeadb80b8',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: 'receiveChild',
    type: 'function',
    signature: 'receiveChild(address,uint256,address,uint256)',
    encoding: '0x597c255f',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeChild',
    type: 'function',
    signature: 'removeChild(uint256,address,uint256)',
    encoding: '0x0f0ba766',
    input_names: '_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeERC20',
    type: 'function',
    signature: 'removeERC20(uint256,address,uint256)',
    encoding: '0x9771ccc8',
    input_names: '_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'rootOwnerOf',
    type: 'function',
    signature: 'rootOwnerOf(uint256)',
    encoding: '0x43a61a8e',
    input_names: '_tokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'rootOwnerOfChild',
    type: 'function',
    signature: 'rootOwnerOfChild(address,uint256)',
    encoding: '0xed81cdda',
    input_names: '_childContract,_childTokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256)',
    encoding: '0x1d98f3c5',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256,bytes)',
    encoding: '0x8d81f51e',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'tokenFallback',
    type: 'function',
    signature: 'tokenFallback(address,uint256,bytes)',
    encoding: '0xc0ee0b8a',
    input_names: '_from,_value,_data,'
  },
  {
    name: 'totalChildContracts',
    type: 'function',
    signature: 'totalChildContracts(uint256)',
    encoding: '0x8da7d0b5',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalChildTokens',
    type: 'function',
    signature: 'totalChildTokens(uint256,address)',
    encoding: '0x35b21ceb',
    input_names: '_tokenId,_childContract,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalERC20Contracts',
    type: 'function',
    signature: 'totalERC20Contracts(uint256)',
    encoding: '0xa7811732',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: 'to,value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256,bytes)',
    encoding: '0xbe45fd62',
    input_names: 'to,value,data,',
    output_names: 'success,'
  },
  {
    name: 'transferChild',
    type: 'function',
    signature: 'transferChild(uint256,address,address,uint256)',
    encoding: '0xbef44f18',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'transferChildToParent',
    type: 'function',
    signature: 'transferChildToParent(uint256,address,uint256,address,uint256,bytes)',
    encoding: '0x08937f62',
    input_names: '_fromTokenId,_toContract,_toTokenId,_childContract,_childTokenId,_data,'
  },
  {
    name: 'transferERC20',
    type: 'function',
    signature: 'transferERC20(uint256,address,address,uint256)',
    encoding: '0x830ef41b',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'transferERC223',
    type: 'function',
    signature: 'transferERC223(uint256,address,address,uint256,bytes)',
    encoding: '0xd49d1bac',
    input_names: '_tokenId,_to,_erc223Contract,_value,_data,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferToParent',
    type: 'function',
    signature: 'transferToParent(address,address,uint256,uint256,bytes)',
    encoding: '0xf50acfa0',
    input_names: '_from,_toContract,_toTokenId,_tokenId,_data,'
  },
  {
    name: 'ReceivedChild',
    type: 'event',
    signature: 'ReceivedChild(address,uint256,address,uint256)',
    encoding: '0x0371ddf2288ad1ba92626a7e31c86a9d006e592cfe57d7d946ef08b13457c08b',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'ReceivedERC20',
    type: 'event',
    signature: 'ReceivedERC20(address,uint256,address,uint256)',
    encoding: '0x684ce28ace37552c6bfb98b7cceda8ed55327078eafb5dfb31218e0856382763',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'TransferChild',
    type: 'event',
    signature: 'TransferChild(uint256,address,address,uint256)',
    encoding: '0x0ef52e516fb5aec15a5d3587e5480481b702b26db93c8430eca78b61990fd3f6',
    input_names: 'tokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'TransferERC20',
    type: 'event',
    signature: 'TransferERC20(uint256,address,address,uint256)',
    encoding: '0xa8352277873fc0d2b233b8127433da351a4164fa701ed6ff79655694222932c4',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'authority',
    type: 'function',
    signature: 'authority()',
    encoding: '0xbf7e214f',
    output_names: 'val_0,'
  },
  {
    name: 'compute',
    type: 'function',
    signature: 'compute()',
    encoding: '0x1a43c338',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'indexes',
    type: 'function',
    signature: 'indexes(address)',
    encoding: '0x2db78d93',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'min',
    type: 'function',
    signature: 'min()',
    encoding: '0xf8897945',
    output_names: 'val_0,'
  },
  {
    name: 'next',
    type: 'function',
    signature: 'next()',
    encoding: '0x4c8fe526',
    output_names: 'val_0,'
  },
  {
    name: 'owner',
    type: 'function',
    signature: 'owner()',
    encoding: '0x8da5cb5b',
    output_names: 'val_0,'
  },
  {
    name: 'peek',
    type: 'function',
    signature: 'peek()',
    encoding: '0x59e02dd7',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke(bytes32)',
    encoding: '0x1504460f',
    input_names: 'val_0,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke()',
    encoding: '0x18178358'
  },
  {
    name: 'read',
    type: 'function',
    signature: 'read()',
    encoding: '0x57de26a4',
    output_names: 'val_0,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(address)',
    encoding: '0x2801617e',
    input_names: 'wat,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(bytes12,address)',
    encoding: '0xbeb38b43',
    input_names: 'pos,wat,'
  },
  {
    name: 'setAuthority',
    type: 'function',
    signature: 'setAuthority(address)',
    encoding: '0x7a9e5e4b',
    input_names: 'authority_,'
  },
  {
    name: 'setMin',
    type: 'function',
    signature: 'setMin(uint96)',
    encoding: '0x6ba5ef0d',
    input_names: 'min_,'
  },
  {
    name: 'setNext',
    type: 'function',
    signature: 'setNext(bytes12)',
    encoding: '0xf2c5925d',
    input_names: 'next_,'
  },
  {
    name: 'setOwner',
    type: 'function',
    signature: 'setOwner(address)',
    encoding: '0x13af4035',
    input_names: 'owner_,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(address)',
    encoding: '0x2966d1b9',
    input_names: 'wat,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(bytes12)',
    encoding: '0xe0a1fdad',
    input_names: 'pos,'
  },
  {
    name: 'values',
    type: 'function',
    signature: 'values(bytes12)',
    encoding: '0x651dd0de',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'void',
    type: 'function',
    signature: 'void()',
    encoding: '0xac4c25b2'
  },
  {
    name: 'LogNote',
    type: 'event',
    signature: 'LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)',
    encoding: '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31',
    input_names: 'sig,guy,foo,bar,wad,fax,'
  },
  {
    name: 'LogSetAuthority',
    type: 'event',
    signature: 'LogSetAuthority(address)',
    encoding: '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4',
    input_names: 'authority,'
  },
  {
    name: 'LogSetOwner',
    type: 'event',
    signature: 'LogSetOwner(address)',
    encoding: '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94',
    input_names: 'owner,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    name: '__default__',
    type: 'function',
    signature: '__default__()',
    encoding: '0x89402a72'
  },
  {
    name: 'addLiquidity',
    type: 'function',
    signature: 'addLiquidity(uint256,uint256,uint256)',
    encoding: '0x422f1043',
    input_names: 'min_liquidity,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'out,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'out,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'out,'
  },
  {
    name: 'decimals',
    type: 'function',
    signature: 'decimals()',
    encoding: '0x313ce567',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapInput',
    type: 'function',
    signature: 'ethToTokenSwapInput(uint256,uint256)',
    encoding: '0xf39b5b9b',
    input_names: 'min_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapOutput',
    type: 'function',
    signature: 'ethToTokenSwapOutput(uint256,uint256)',
    encoding: '0x6b1d4db7',
    input_names: 'tokens_bought,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferInput',
    type: 'function',
    signature: 'ethToTokenTransferInput(uint256,uint256,address)',
    encoding: '0xad65d76d',
    input_names: 'min_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferOutput',
    type: 'function',
    signature: 'ethToTokenTransferOutput(uint256,uint256,address)',
    encoding: '0x0b573638',
    input_names: 'tokens_bought,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'factoryAddress',
    type: 'function',
    signature: 'factoryAddress()',
    encoding: '0x966dae0e',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenInputPrice',
    type: 'function',
    signature: 'getEthToTokenInputPrice(uint256)',
    encoding: '0xcd7724c3',
    input_names: 'eth_sold,',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenOutputPrice',
    type: 'function',
    signature: 'getEthToTokenOutputPrice(uint256)',
    encoding: '0x59e94862',
    input_names: 'tokens_bought,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthInputPrice',
    type: 'function',
    signature: 'getTokenToEthInputPrice(uint256)',
    encoding: '0x95b68fe7',
    input_names: 'tokens_sold,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthOutputPrice',
    type: 'function',
    signature: 'getTokenToEthOutputPrice(uint256)',
    encoding: '0x2640f62c',
    input_names: 'eth_bought,',
    output_names: 'out,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'out,'
  },
  {
    name: 'removeLiquidity',
    type: 'function',
    signature: 'removeLiquidity(uint256,uint256,uint256,uint256)',
    encoding: '0xf88bf15a',
    input_names: 'amount,min_eth,min_tokens,deadline,',
    output_names: 'out,out,'
  },
  {
    name: 'setup',
    type: 'function',
    signature: 'setup(address)',
    encoding: '0x66d38203',
    input_names: 'token_addr,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'out,'
  },
  {
    name: 'tokenAddress',
    type: 'function',
    signature: 'tokenAddress()',
    encoding: '0x9d76ea58',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapInput',
    type: 'function',
    signature: 'tokenToEthSwapInput(uint256,uint256,uint256)',
    encoding: '0x95e3c50b',
    input_names: 'tokens_sold,min_eth,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapOutput',
    type: 'function',
    signature: 'tokenToEthSwapOutput(uint256,uint256,uint256)',
    encoding: '0x013efd8b',
    input_names: 'eth_bought,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferInput',
    type: 'function',
    signature: 'tokenToEthTransferInput(uint256,uint256,uint256,address)',
    encoding: '0x7237e031',
    input_names: 'tokens_sold,min_eth,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferOutput',
    type: 'function',
    signature: 'tokenToEthTransferOutput(uint256,uint256,uint256,address)',
    encoding: '0xd4e4841d',
    input_names: 'eth_bought,max_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapInput',
    type: 'function',
    signature: 'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb1cb43bf',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapOutput',
    type: 'function',
    signature: 'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xea650c7d',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferInput',
    type: 'function',
    signature: 'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xec384a3e',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferOutput',
    type: 'function',
    signature: 'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0x981a1327',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapInput',
    type: 'function',
    signature: 'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xddf7e1a7',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapOutput',
    type: 'function',
    signature: 'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb040d545',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferInput',
    type: 'function',
    signature: 'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf552d91b',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferOutput',
    type: 'function',
    signature: 'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf3c0efe9',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'out,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'AddLiquidity',
    type: 'event',
    signature: 'AddLiquidity(address,uint256,uint256)',
    encoding: '0x06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'EthPurchase',
    type: 'event',
    signature: 'EthPurchase(address,uint256,uint256)',
    encoding: '0x7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b353984238705',
    input_names: 'buyer,tokens_sold,eth_bought,'
  },
  {
    name: 'RemoveLiquidity',
    type: 'event',
    signature: 'RemoveLiquidity(address,uint256,uint256)',
    encoding: '0x0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e8',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'TokenPurchase',
    type: 'event',
    signature: 'TokenPurchase(address,uint256,uint256)',
    encoding: '0xcd60aa75dea3072fbc07ae6d7d856b5dc5f4eee88854f5b4abf7b680ef8bc50f',
    input_names: 'buyer,eth_sold,tokens_bought,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256,uint256)',
    encoding: '0xaf8342fe',
    input_names: '_owners,_required,_daylimit,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256)',
    encoding: '0xfcd52c14',
    input_names: '_owners,_required,'
  },
  {
    type: 'fallback',
    signature: '()',
    encoding: '0x861731d5'
  },
  {
    name: 'MAX_OWNER_COUNT',
    type: 'function',
    signature: 'MAX_OWNER_COUNT()',
    encoding: '0xd74f8edd',
    output_names: 'val_0,'
  },
  {
    name: 'addOwner',
    type: 'function',
    signature: 'addOwner(address)',
    encoding: '0x7065cb48',
    input_names: '_owner,'
  },
  {
    name: 'changeOwner',
    type: 'function',
    signature: 'changeOwner(address,address)',
    encoding: '0xf00d4b5d',
    input_names: '_from,_to,'
  },
  {
    name: 'changeRequirement',
    type: 'function',
    signature: 'changeRequirement(uint256)',
    encoding: '0xba51a6df',
    input_names: '_newRequired,'
  },
  {
    name: 'confirm',
    type: 'function',
    signature: 'confirm(bytes32)',
    encoding: '0x797af627',
    input_names: '_h,',
    output_names: 'val_0,'
  },
  {
    name: 'confirmTransaction',
    type: 'function',
    signature: 'confirmTransaction(uint256)',
    encoding: '0xc01a8c84',
    input_names: 'transactionId,'
  },
  {
    name: 'confirmations',
    type: 'function',
    signature: 'confirmations(uint256,address)',
    encoding: '0x3411c81c',
    input_names: 'val_0,val_1,',
    output_names: 'val_0,'
  },
  {
    name: 'execute',
    type: 'function',
    signature: 'execute(address,uint256,bytes)',
    encoding: '0xb61d27f6',
    input_names: '_to,_value,_data,',
    output_names: '_r,'
  },
  {
    name: 'executeTransaction',
    type: 'function',
    signature: 'executeTransaction(uint256)',
    encoding: '0xee22610b',
    input_names: 'transactionId,'
  },
  {
    name: 'getConfirmationCount',
    type: 'function',
    signature: 'getConfirmationCount(uint256)',
    encoding: '0x8b51d13f',
    input_names: 'transactionId,',
    output_names: 'count,'
  },
  {
    name: 'getConfirmations',
    type: 'function',
    signature: 'getConfirmations(uint256)',
    encoding: '0xb5dc40c3',
    input_names: 'transactionId,',
    output_names: '_confirmations,'
  },
  {
    name: 'getOwners',
    type: 'function',
    signature: 'getOwners()',
    encoding: '0xa0e67e2b',
    output_names: 'val_0,'
  },
  {
    name: 'getTransactionCount',
    type: 'function',
    signature: 'getTransactionCount(bool,bool)',
    encoding: '0x54741525',
    input_names: 'pending,executed,',
    output_names: 'count,'
  },
  {
    name: 'getTransactionIds',
    type: 'function',
    signature: 'getTransactionIds(uint256,uint256,bool,bool)',
    encoding: '0xa8abe69a',
    input_names: 'from,to,pending,executed,',
    output_names: '_transactionIds,'
  },
  {
    name: 'hasConfirmed',
    type: 'function',
    signature: 'hasConfirmed(bytes32,address)',
    encoding: '0xc2cf7326',
    input_names: '_operation,_owner,',
    output_names: 'val_0,'
  },
  {
    name: 'isConfirmed',
    type: 'function',
    signature: 'isConfirmed(uint256)',
    encoding: '0x784547a7',
    input_names: 'transactionId,',
    output_names: 'val_0,'
  },
  {
    name: 'isOwner',
    type: 'function',
    signature: 'isOwner(address)',
    encoding: '0x2f54bf6e',
    input_names: '_addr,',
    output_names: 'val_0,'
  },
  {
    name: 'kill',
    type: 'function',
    signature: 'kill(address)',
    encoding: '0xcbf0b0c0',
    input_names: '_to,'
  },
  {
    name: 'm_dailyLimit',
    type: 'function',
    signature: 'm_dailyLimit()',
    encoding: '0xf1736d86',
    output_names: 'val_0,'
  },
  {
    name: 'm_numOwners',
    type: 'function',
    signature: 'm_numOwners()',
    encoding: '0x4123cb6b',
    output_names: 'val_0,'
  },
  {
    name: 'm_required',
    type: 'function',
    signature: 'm_required()',
    encoding: '0x746c9171',
    output_names: 'val_0,'
  },
  {
    name: 'owners',
    type: 'function',
    signature: 'owners(uint256)',
    encoding: '0x025e7c27',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'removeOwner',
    type: 'function',
    signature: 'removeOwner(address)',
    encoding: '0x173825d9',
    input_names: '_owner,'
  },
  {
    name: 'replaceOwner',
    type: 'function',
    signature: 'replaceOwner(address,address)',
    encoding: '0xe20056e6',
    input_names: 'owner,newOwner,'
  },
  {
    name: 'required',
    type: 'function',
    signature: 'required()',
    encoding: '0xdc8452cd',
    output_names: 'val_0,'
  },
  {
    name: 'resetSpentToday',
    type: 'function',
    signature: 'resetSpentToday()',
    encoding: '0x5c52c2f5'
  },
  {
    name: 'revoke',
    type: 'function',
    signature: 'revoke(bytes32)',
    encoding: '0xb75c7dc6',
    input_names: '_operation,'
  },
  {
    name: 'revokeConfirmation',
    type: 'function',
    signature: 'revokeConfirmation(uint256)',
    encoding: '0x20ea8d86',
    input_names: 'transactionId,'
  },
  {
    name: 'setDailyLimit',
    type: 'function',
    signature: 'setDailyLimit(uint256)',
    encoding: '0xb20d30a9',
    input_names: '_newLimit,'
  },
  {
    name: 'submitTransaction',
    type: 'function',
    signature: 'submitTransaction(address,uint256,bytes)',
    encoding: '0xc6427474',
    input_names: 'destination,value,data,',
    output_names: 'transactionId,'
  },
  {
    name: 'transactionCount',
    type: 'function',
    signature: 'transactionCount()',
    encoding: '0xb77bf600',
    output_names: 'val_0,'
  },
  {
    name: 'transactions',
    type: 'function',
    signature: 'transactions(uint256)',
    encoding: '0x9ace38c2',
    input_names: 'val_0,',
    output_names: 'destination,value,data,executed,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,uint256)',
    encoding: '0x4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,bytes32)',
    encoding: '0xe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda',
    input_names: 'owner,operation,'
  },
  {
    name: 'ConfirmationNeeded',
    type: 'event',
    signature: 'ConfirmationNeeded(bytes32,address,uint256,address,bytes)',
    encoding: '0x1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32',
    input_names: 'operation,initiator,value,to,data,'
  },
  {
    name: 'Deposit',
    type: 'event',
    signature: 'Deposit(address,uint256)',
    encoding: '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c',
    input_names: 'from,value,'
  },
  {
    name: 'Execution',
    type: 'event',
    signature: 'Execution(uint256)',
    encoding: '0x33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed75',
    input_names: '_transactionId,'
  },
  {
    name: 'ExecutionFailure',
    type: 'event',
    signature: 'ExecutionFailure(uint256)',
    encoding: '0x526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b79236',
    input_names: '_transactionId,'
  },
  {
    name: 'MultiTransact',
    type: 'event',
    signature: 'MultiTransact(address,bytes32,uint256,address,bytes)',
    encoding: '0xe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a',
    input_names: 'owner,operation,value,to,data,'
  },
  {
    name: 'OwnerAdded',
    type: 'event',
    signature: 'OwnerAdded(address)',
    encoding: '0x994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3',
    input_names: 'newOwner,'
  },
  {
    name: 'OwnerAddition',
    type: 'event',
    signature: 'OwnerAddition(address)',
    encoding: '0xf39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d',
    input_names: '_owner,'
  },
  {
    name: 'OwnerChanged',
    type: 'event',
    signature: 'OwnerChanged(address,address)',
    encoding: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
    input_names: 'oldOwner,newOwner,'
  },
  {
    name: 'OwnerRemoval',
    type: 'event',
    signature: 'OwnerRemoval(address)',
    encoding: '0x8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b90',
    input_names: '_owner,'
  },
  {
    name: 'OwnerRemoved',
    type: 'event',
    signature: 'OwnerRemoved(address)',
    encoding: '0x58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da',
    input_names: 'oldOwner,'
  },
  {
    name: 'RequirementChange',
    type: 'event',
    signature: 'RequirementChange(uint256)',
    encoding: '0xa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a',
    input_names: '_required,'
  },
  {
    name: 'RequirementChanged',
    type: 'event',
    signature: 'RequirementChanged(uint256)',
    encoding: '0xacbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da',
    input_names: 'newRequirement,'
  },
  {
    name: 'Revocation',
    type: 'event',
    signature: 'Revocation(address,uint256)',
    encoding: '0xf6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e9',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Revoke',
    type: 'event',
    signature: 'Revoke(address,bytes32)',
    encoding: '0xc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b',
    input_names: 'owner,operation,'
  },
  {
    name: 'SingleTransact',
    type: 'event',
    signature: 'SingleTransact(address,uint256,address,bytes)',
    encoding: '0x92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd004',
    input_names: 'owner,value,to,data,'
  },
  {
    name: 'Submission',
    type: 'event',
    signature: 'Submission(uint256)',
    encoding: '0xc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e51',
    input_names: '_transactionId,'
  },
  {
    name: '_doSafeBatchTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)',
    encoding: '0xe51c223d',
    input_names: '_operator,_from,_to,_ids,_values,_data,'
  },
  {
    name: '_doSafeTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)',
    encoding: '0x084e9e24',
    input_names: '_operator,_from,_to,_id,_value,_data,'
  },
  {
    name: 'add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address,uint256)',
    encoding: '0x00fdd58e',
    input_names: '_owner,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfBatch',
    type: 'function',
    signature: 'balanceOfBatch(address[],uint256[])',
    encoding: '0x4e1273f4',
    input_names: '_owners,_ids,',
    output_names: 'memory,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(uint256,string)',
    encoding: '0x0118fa49',
    input_names: '_initialSupply,_uri,',
    output_names: '_id,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(string,bool)',
    encoding: '0xcc10e401',
    input_names: '_uri,_isNF,',
    output_names: '_type,'
  },
  {
    name: 'div',
    type: 'function',
    signature: 'div(uint256,uint256)',
    encoding: '0xa391c15b',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleBaseType',
    type: 'function',
    signature: 'getNonFungibleBaseType(uint256)',
    encoding: '0x6f969c2d',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleIndex',
    type: 'function',
    signature: 'getNonFungibleIndex(uint256)',
    encoding: '0x9cca1c64',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: 'account,',
    output_names: 'ret_0,'
  },
  {
    name: 'isFungible',
    type: 'function',
    signature: 'isFungible(uint256)',
    encoding: '0xadebf6f2',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungible',
    type: 'function',
    signature: 'isNonFungible(uint256)',
    encoding: '0xe44591f0',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleBaseType',
    type: 'function',
    signature: 'isNonFungibleBaseType(uint256)',
    encoding: '0x7269a327',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleItem',
    type: 'function',
    signature: 'isNonFungibleItem(uint256)',
    encoding: '0x5e81b958',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(uint256,address[],uint256[])',
    encoding: '0xcfa84fc1',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintFungible',
    type: 'function',
    signature: 'mintFungible(uint256,address[],uint256[])',
    encoding: '0x78b27221',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintNonFungible',
    type: 'function',
    signature: 'mintNonFungible(uint256,address[])',
    encoding: '0xf9419088',
    input_names: '_type,_to,'
  },
  {
    name: 'mul',
    type: 'function',
    signature: 'mul(uint256,uint256)',
    encoding: '0xc8a4ac9c',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'onERC1155BatchReceived',
    type: 'function',
    signature: 'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xbc197c81',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC1155Received',
    type: 'function',
    signature: 'onERC1155Received(address,address,uint256,uint256,bytes)',
    encoding: '0xf23a6e61',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXBatchReceived',
    type: 'function',
    signature: 'onERCXXXXBatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xe9e5be6a',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXReceived',
    type: 'function',
    signature: 'onERCXXXXReceived(address,address,uint256,uint256,bytes)',
    encoding: '0xeb510be8',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeBatchTransferFrom',
    type: 'function',
    signature: 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    encoding: '0x2eb2c2d6',
    input_names: '_from,_to,_ids,_values,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,uint256,bytes)',
    encoding: '0xf242432a',
    input_names: '_from,_to,_id,_value,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'setCompleted',
    type: 'function',
    signature: 'setCompleted(uint256)',
    encoding: '0xfdacd576',
    input_names: 'completed,'
  },
  {
    name: 'setShouldReject',
    type: 'function',
    signature: 'setShouldReject(bool)',
    encoding: '0xa175b638',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectClash',
    type: 'function',
    signature: 'setShouldRejectClash(bool)',
    encoding: '0x2090dd24',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectXXXX',
    type: 'function',
    signature: 'setShouldRejectXXXX(bool)',
    encoding: '0x80f5fe74',
    input_names: '_value,'
  },
  {
    name: 'setURI',
    type: 'function',
    signature: 'setURI(string,uint256)',
    encoding: '0x67db3b8f',
    input_names: '_uri,_id,'
  },
  {
    name: 'sub',
    type: 'function',
    signature: 'sub(uint256,uint256)',
    encoding: '0xb67d77c5',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'updateContract',
    type: 'function',
    signature: 'updateContract(address,string,string)',
    encoding: '0x61455567',
    input_names: '_delegate,_functionSignatures,_commitMessage,'
  },
  {
    name: 'upgrade',
    type: 'function',
    signature: 'upgrade(address)',
    encoding: '0x0900f010',
    input_names: 'new_address,'
  },
  {
    name: 'uri',
    type: 'function',
    signature: 'uri(uint256)',
    encoding: '0x0e89341c',
    input_names: '_id,',
    output_names: 'memory,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256,uint256,uint256)',
    encoding: '0x3a9c85c6b31f7a9d7fe1478f53e1be42e85db97ca30d1789cfef9196dbc472c9',
    input_names: '_owner,_spender,_id,_oldValue,_value,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'CommitMessage',
    type: 'event',
    signature: 'CommitMessage(string)',
    encoding: '0xaa1c0a0a78cec2470f9652e5d29540752e7a64d70f926933cebf13afaeda45de',
    input_names: 'message,'
  },
  {
    name: 'FunctionUpdate',
    type: 'event',
    signature: 'FunctionUpdate(bytes4,address,address,string)',
    encoding: '0x3234040ce3bd4564874e44810f198910133a1b24c4e84aac87edbf6b458f5353',
    input_names: 'functionId,oldDelegate,newDelegate,functionSignature,'
  },
  {
    name: 'TransferBatch',
    type: 'event',
    signature: 'TransferBatch(address,address,address,uint256[],uint256[])',
    encoding: '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
    input_names: '_operator,_from,_to,_ids,_values,'
  },
  {
    name: 'TransferSingle',
    type: 'event',
    signature: 'TransferSingle(address,address,address,uint256,uint256)',
    encoding: '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
    input_names: '_operator,_from,_to,_id,_value,'
  },
  {
    name: 'URI',
    type: 'event',
    signature: 'URI(string,uint256)',
    encoding: '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b',
    input_names: '_value,_id,'
  },
  {
    name: 'canTransfer',
    type: 'function',
    signature: 'canTransfer(address,uint256,bytes)',
    encoding: '0x1badb25c',
    input_names: '_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'canTransferFrom',
    type: 'function',
    signature: 'canTransferFrom(address,address,uint256,bytes)',
    encoding: '0x122eb575',
    input_names: '_from,_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'isIssuable',
    type: 'function',
    signature: 'isIssuable()',
    encoding: '0x2f1cae85',
    output_names: 'ret_0,'
  },
  {
    name: 'issue',
    type: 'function',
    signature: 'issue(address,uint256,bytes)',
    encoding: '0xbb3acde9',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'redeem',
    type: 'function',
    signature: 'redeem(uint256,bytes)',
    encoding: '0xe77c646d',
    input_names: '_value,_data,'
  },
  {
    name: 'redeemFrom',
    type: 'function',
    signature: 'redeemFrom(address,uint256,bytes)',
    encoding: '0x9675193c',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'transferFromWithData',
    type: 'function',
    signature: 'transferFromWithData(address,address,uint256,bytes)',
    encoding: '0xee532f31',
    input_names: '_from,_to,_value,_data,'
  },
  {
    name: 'transferWithData',
    type: 'function',
    signature: 'transferWithData(address,uint256,bytes)',
    encoding: '0x2535f762',
    input_names: '_to,_value,_data,'
  },
  {
    name: 'Issued',
    type: 'event',
    signature: 'Issued(address,address,uint256,bytes)',
    encoding: '0x0e9905d62635f049c2f4e11678ebf9dc3d1f8c4a653e290759b772e47ba00d00',
    input_names: '_operator,_to,_value,_data,'
  },
  {
    name: 'Redeemed',
    type: 'event',
    signature: 'Redeemed(address,address,uint256,bytes)',
    encoding: '0xb7d0d6b60740753e9f16692a2f479472a1385aec2420fa43225b02f2ffa1afe7',
    input_names: '_operator,_from,_value,_data,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'canImplementInterfaceForAddress',
    type: 'function',
    signature: 'canImplementInterfaceForAddress(bytes32,address)',
    encoding: '0x249cb3fa',
    input_names: 'interfaceHash,addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'getInterfaceImplementer',
    type: 'function',
    signature: 'getInterfaceImplementer(address,bytes32)',
    encoding: '0xaabbb8ca',
    input_names: '_addr,_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'getManager',
    type: 'function',
    signature: 'getManager(address)',
    encoding: '0x3d584063',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165Interface',
    type: 'function',
    signature: 'implementsERC165Interface(address,bytes4)',
    encoding: '0xf712f3e8',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165InterfaceNoCache',
    type: 'function',
    signature: 'implementsERC165InterfaceNoCache(address,bytes4)',
    encoding: '0xb7056765',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'interfaceHash',
    type: 'function',
    signature: 'interfaceHash(string)',
    encoding: '0x65ba36c1',
    input_names: '_interfaceName,',
    output_names: 'ret_0,'
  },
  {
    name: 'isERC165Interface',
    type: 'function',
    signature: 'isERC165Interface(bytes32)',
    encoding: '0x9d4cf268',
    input_names: '_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'noThrowCall',
    type: 'function',
    signature: 'noThrowCall(address,bytes4)',
    encoding: '0xf86cd33d',
    input_names: '_contract,_interfaceId,',
    output_names: 'success,result,'
  },
  {
    name: 'setInterfaceImplementer',
    type: 'function',
    signature: 'setInterfaceImplementer(address,bytes32,address)',
    encoding: '0x29965a1d',
    input_names: '_addr,_interfaceHash,_implementer,'
  },
  {
    name: 'setManager',
    type: 'function',
    signature: 'setManager(address,address)',
    encoding: '0x5df8122f',
    input_names: '_addr,_newManager,'
  },
  {
    name: 'updateERC165Cache',
    type: 'function',
    signature: 'updateERC165Cache(address,bytes4)',
    encoding: '0xa41e7d51',
    input_names: '_contract,_interfaceId,'
  },
  {
    name: 'InterfaceImplementerSet',
    type: 'event',
    signature: 'InterfaceImplementerSet(address,bytes32,address)',
    encoding: '0x93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db153',
    input_names: 'addr,interfaceHash,implementer,'
  },
  {
    name: 'ManagerChanged',
    type: 'event',
    signature: 'ManagerChanged(address,address)',
    encoding: '0x605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a4350',
    input_names: 'addr,newManager,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'ret_0,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: '_name,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_tokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: '_symbol,'
  },
  {
    name: 'tokenURI',
    type: 'function',
    signature: 'tokenURI(uint256)',
    encoding: '0xc87b56dd',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_approved,_tokenId,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'authorizeOperator',
    type: 'function',
    signature: 'authorizeOperator(address)',
    encoding: '0x959b8c3f',
    input_names: 'operator,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: 'holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'burn',
    type: 'function',
    signature: 'burn(uint256,bytes)',
    encoding: '0xfe9d9303',
    input_names: 'amount,data,'
  },
  {
    name: 'defaultOperators',
    type: 'function',
    signature: 'defaultOperators()',
    encoding: '0x06e48538',
    output_names: 'memory,'
  },
  {
    name: 'granularity',
    type: 'function',
    signature: 'granularity()',
    encoding: '0x556f0dc7',
    output_names: 'ret_0,'
  },
  {
    name: 'isOperatorFor',
    type: 'function',
    signature: 'isOperatorFor(address,address)',
    encoding: '0xd95b6371',
    input_names: 'operator,holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'memory,'
  },
  {
    name: 'operatorBurn',
    type: 'function',
    signature: 'operatorBurn(address,uint256,bytes,bytes)',
    encoding: '0xfc673c4f',
    input_names: 'from,amount,data,operatorData,'
  },
  {
    name: 'operatorSend',
    type: 'function',
    signature: 'operatorSend(address,address,uint256,bytes,bytes)',
    encoding: '0x62ad1b83',
    input_names: 'from,to,amount,data,operatorData,'
  },
  {
    name: 'revokeOperator',
    type: 'function',
    signature: 'revokeOperator(address)',
    encoding: '0xfad8b32a',
    input_names: 'operator,'
  },
  {
    name: 'send',
    type: 'function',
    signature: 'send(address,uint256,bytes)',
    encoding: '0x9bd9bbc6',
    input_names: 'to,amount,data,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'memory,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'ret_0,'
  },
  {
    name: 'AuthorizedOperator',
    type: 'event',
    signature: 'AuthorizedOperator(address,address)',
    encoding: '0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9',
    input_names: 'operator,holder,'
  },
  {
    name: 'Burned',
    type: 'event',
    signature: 'Burned(address,address,uint256,bytes,bytes)',
    encoding: '0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098',
    input_names: 'operator,from,amount,data,operatorData,'
  },
  {
    name: 'Minted',
    type: 'event',
    signature: 'Minted(address,address,uint256,bytes,bytes)',
    encoding: '0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d',
    input_names: 'operator,to,amount,data,operatorData,'
  },
  {
    name: 'RevokedOperator',
    type: 'event',
    signature: 'RevokedOperator(address,address)',
    encoding: '0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1',
    input_names: 'operator,holder,'
  },
  {
    name: 'Sent',
    type: 'event',
    signature: 'Sent(address,address,address,uint256,bytes,bytes)',
    encoding: '0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987',
    input_names: 'operator,from,to,amount,data,operatorData,'
  },
  {
    name: '_ownerOfChild',
    type: 'function',
    signature: '_ownerOfChild(address,uint256)',
    encoding: '0xa5aeb1d4',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: '_transferFrom',
    type: 'function',
    signature: '_transferFrom(address,address,uint256)',
    encoding: '0xcb712535',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'remaining,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_tokenOwner,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfERC20',
    type: 'function',
    signature: 'balanceOfERC20(uint256,address)',
    encoding: '0xe226ed22',
    input_names: '_tokenId,__erc20Contract,',
    output_names: 'ret_0,'
  },
  {
    name: 'childContractByIndex',
    type: 'function',
    signature: 'childContractByIndex(uint256,uint256)',
    encoding: '0x0d5a621b',
    input_names: '_tokenId,_index,',
    output_names: 'childContract,'
  },
  {
    name: 'childExists',
    type: 'function',
    signature: 'childExists(address,uint256)',
    encoding: '0x5680a3ad',
    input_names: '_childContract,_childTokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'childTokenByIndex',
    type: 'function',
    signature: 'childTokenByIndex(uint256,address,uint256)',
    encoding: '0x160b01a1',
    input_names: '_tokenId,_childContract,_index,',
    output_names: 'childTokenId,'
  },
  {
    name: 'erc20ContractByIndex',
    type: 'function',
    signature: 'erc20ContractByIndex(uint256,uint256)',
    encoding: '0x627c81ff',
    input_names: '_tokenId,_index,',
    output_names: 'ret_0,'
  },
  {
    name: 'erc20Received',
    type: 'function',
    signature: 'erc20Received(address,uint256,address,uint256)',
    encoding: '0x9e95670d',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'getChild',
    type: 'function',
    signature: 'getChild(address,uint256,address,uint256)',
    encoding: '0xba6b5f96',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'getERC20',
    type: 'function',
    signature: 'getERC20(address,uint256,address,uint256)',
    encoding: '0x07cff6f2',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(address)',
    encoding: '0x6a627842',
    input_names: '_to,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,uint256,bytes)',
    encoding: '0xf0b9e5ba',
    input_names: '_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'tokenOwner,'
  },
  {
    name: 'ownerOfChild',
    type: 'function',
    signature: 'ownerOfChild(address,uint256)',
    encoding: '0xeadb80b8',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: 'receiveChild',
    type: 'function',
    signature: 'receiveChild(address,uint256,address,uint256)',
    encoding: '0x597c255f',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeChild',
    type: 'function',
    signature: 'removeChild(uint256,address,uint256)',
    encoding: '0x0f0ba766',
    input_names: '_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeERC20',
    type: 'function',
    signature: 'removeERC20(uint256,address,uint256)',
    encoding: '0x9771ccc8',
    input_names: '_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'rootOwnerOf',
    type: 'function',
    signature: 'rootOwnerOf(uint256)',
    encoding: '0x43a61a8e',
    input_names: '_tokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'rootOwnerOfChild',
    type: 'function',
    signature: 'rootOwnerOfChild(address,uint256)',
    encoding: '0xed81cdda',
    input_names: '_childContract,_childTokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256)',
    encoding: '0x1d98f3c5',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256,bytes)',
    encoding: '0x8d81f51e',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'tokenFallback',
    type: 'function',
    signature: 'tokenFallback(address,uint256,bytes)',
    encoding: '0xc0ee0b8a',
    input_names: '_from,_value,_data,'
  },
  {
    name: 'totalChildContracts',
    type: 'function',
    signature: 'totalChildContracts(uint256)',
    encoding: '0x8da7d0b5',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalChildTokens',
    type: 'function',
    signature: 'totalChildTokens(uint256,address)',
    encoding: '0x35b21ceb',
    input_names: '_tokenId,_childContract,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalERC20Contracts',
    type: 'function',
    signature: 'totalERC20Contracts(uint256)',
    encoding: '0xa7811732',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: 'to,value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256,bytes)',
    encoding: '0xbe45fd62',
    input_names: 'to,value,data,',
    output_names: 'success,'
  },
  {
    name: 'transferChild',
    type: 'function',
    signature: 'transferChild(uint256,address,address,uint256)',
    encoding: '0xbef44f18',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'transferChildToParent',
    type: 'function',
    signature: 'transferChildToParent(uint256,address,uint256,address,uint256,bytes)',
    encoding: '0x08937f62',
    input_names: '_fromTokenId,_toContract,_toTokenId,_childContract,_childTokenId,_data,'
  },
  {
    name: 'transferERC20',
    type: 'function',
    signature: 'transferERC20(uint256,address,address,uint256)',
    encoding: '0x830ef41b',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'transferERC223',
    type: 'function',
    signature: 'transferERC223(uint256,address,address,uint256,bytes)',
    encoding: '0xd49d1bac',
    input_names: '_tokenId,_to,_erc223Contract,_value,_data,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferToParent',
    type: 'function',
    signature: 'transferToParent(address,address,uint256,uint256,bytes)',
    encoding: '0xf50acfa0',
    input_names: '_from,_toContract,_toTokenId,_tokenId,_data,'
  },
  {
    name: 'ReceivedChild',
    type: 'event',
    signature: 'ReceivedChild(address,uint256,address,uint256)',
    encoding: '0x0371ddf2288ad1ba92626a7e31c86a9d006e592cfe57d7d946ef08b13457c08b',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'ReceivedERC20',
    type: 'event',
    signature: 'ReceivedERC20(address,uint256,address,uint256)',
    encoding: '0x684ce28ace37552c6bfb98b7cceda8ed55327078eafb5dfb31218e0856382763',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'TransferChild',
    type: 'event',
    signature: 'TransferChild(uint256,address,address,uint256)',
    encoding: '0x0ef52e516fb5aec15a5d3587e5480481b702b26db93c8430eca78b61990fd3f6',
    input_names: 'tokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'TransferERC20',
    type: 'event',
    signature: 'TransferERC20(uint256,address,address,uint256)',
    encoding: '0xa8352277873fc0d2b233b8127433da351a4164fa701ed6ff79655694222932c4',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'authority',
    type: 'function',
    signature: 'authority()',
    encoding: '0xbf7e214f',
    output_names: 'val_0,'
  },
  {
    name: 'compute',
    type: 'function',
    signature: 'compute()',
    encoding: '0x1a43c338',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'indexes',
    type: 'function',
    signature: 'indexes(address)',
    encoding: '0x2db78d93',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'min',
    type: 'function',
    signature: 'min()',
    encoding: '0xf8897945',
    output_names: 'val_0,'
  },
  {
    name: 'next',
    type: 'function',
    signature: 'next()',
    encoding: '0x4c8fe526',
    output_names: 'val_0,'
  },
  {
    name: 'owner',
    type: 'function',
    signature: 'owner()',
    encoding: '0x8da5cb5b',
    output_names: 'val_0,'
  },
  {
    name: 'peek',
    type: 'function',
    signature: 'peek()',
    encoding: '0x59e02dd7',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke(bytes32)',
    encoding: '0x1504460f',
    input_names: 'val_0,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke()',
    encoding: '0x18178358'
  },
  {
    name: 'read',
    type: 'function',
    signature: 'read()',
    encoding: '0x57de26a4',
    output_names: 'val_0,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(address)',
    encoding: '0x2801617e',
    input_names: 'wat,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(bytes12,address)',
    encoding: '0xbeb38b43',
    input_names: 'pos,wat,'
  },
  {
    name: 'setAuthority',
    type: 'function',
    signature: 'setAuthority(address)',
    encoding: '0x7a9e5e4b',
    input_names: 'authority_,'
  },
  {
    name: 'setMin',
    type: 'function',
    signature: 'setMin(uint96)',
    encoding: '0x6ba5ef0d',
    input_names: 'min_,'
  },
  {
    name: 'setNext',
    type: 'function',
    signature: 'setNext(bytes12)',
    encoding: '0xf2c5925d',
    input_names: 'next_,'
  },
  {
    name: 'setOwner',
    type: 'function',
    signature: 'setOwner(address)',
    encoding: '0x13af4035',
    input_names: 'owner_,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(address)',
    encoding: '0x2966d1b9',
    input_names: 'wat,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(bytes12)',
    encoding: '0xe0a1fdad',
    input_names: 'pos,'
  },
  {
    name: 'values',
    type: 'function',
    signature: 'values(bytes12)',
    encoding: '0x651dd0de',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'void',
    type: 'function',
    signature: 'void()',
    encoding: '0xac4c25b2'
  },
  {
    name: 'LogNote',
    type: 'event',
    signature: 'LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)',
    encoding: '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31',
    input_names: 'sig,guy,foo,bar,wad,fax,'
  },
  {
    name: 'LogSetAuthority',
    type: 'event',
    signature: 'LogSetAuthority(address)',
    encoding: '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4',
    input_names: 'authority,'
  },
  {
    name: 'LogSetOwner',
    type: 'event',
    signature: 'LogSetOwner(address)',
    encoding: '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94',
    input_names: 'owner,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    name: '__default__',
    type: 'function',
    signature: '__default__()',
    encoding: '0x89402a72'
  },
  {
    name: 'addLiquidity',
    type: 'function',
    signature: 'addLiquidity(uint256,uint256,uint256)',
    encoding: '0x422f1043',
    input_names: 'min_liquidity,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'out,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'out,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'out,'
  },
  {
    name: 'decimals',
    type: 'function',
    signature: 'decimals()',
    encoding: '0x313ce567',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapInput',
    type: 'function',
    signature: 'ethToTokenSwapInput(uint256,uint256)',
    encoding: '0xf39b5b9b',
    input_names: 'min_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapOutput',
    type: 'function',
    signature: 'ethToTokenSwapOutput(uint256,uint256)',
    encoding: '0x6b1d4db7',
    input_names: 'tokens_bought,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferInput',
    type: 'function',
    signature: 'ethToTokenTransferInput(uint256,uint256,address)',
    encoding: '0xad65d76d',
    input_names: 'min_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferOutput',
    type: 'function',
    signature: 'ethToTokenTransferOutput(uint256,uint256,address)',
    encoding: '0x0b573638',
    input_names: 'tokens_bought,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'factoryAddress',
    type: 'function',
    signature: 'factoryAddress()',
    encoding: '0x966dae0e',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenInputPrice',
    type: 'function',
    signature: 'getEthToTokenInputPrice(uint256)',
    encoding: '0xcd7724c3',
    input_names: 'eth_sold,',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenOutputPrice',
    type: 'function',
    signature: 'getEthToTokenOutputPrice(uint256)',
    encoding: '0x59e94862',
    input_names: 'tokens_bought,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthInputPrice',
    type: 'function',
    signature: 'getTokenToEthInputPrice(uint256)',
    encoding: '0x95b68fe7',
    input_names: 'tokens_sold,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthOutputPrice',
    type: 'function',
    signature: 'getTokenToEthOutputPrice(uint256)',
    encoding: '0x2640f62c',
    input_names: 'eth_bought,',
    output_names: 'out,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'out,'
  },
  {
    name: 'removeLiquidity',
    type: 'function',
    signature: 'removeLiquidity(uint256,uint256,uint256,uint256)',
    encoding: '0xf88bf15a',
    input_names: 'amount,min_eth,min_tokens,deadline,',
    output_names: 'out,out,'
  },
  {
    name: 'setup',
    type: 'function',
    signature: 'setup(address)',
    encoding: '0x66d38203',
    input_names: 'token_addr,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'out,'
  },
  {
    name: 'tokenAddress',
    type: 'function',
    signature: 'tokenAddress()',
    encoding: '0x9d76ea58',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapInput',
    type: 'function',
    signature: 'tokenToEthSwapInput(uint256,uint256,uint256)',
    encoding: '0x95e3c50b',
    input_names: 'tokens_sold,min_eth,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapOutput',
    type: 'function',
    signature: 'tokenToEthSwapOutput(uint256,uint256,uint256)',
    encoding: '0x013efd8b',
    input_names: 'eth_bought,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferInput',
    type: 'function',
    signature: 'tokenToEthTransferInput(uint256,uint256,uint256,address)',
    encoding: '0x7237e031',
    input_names: 'tokens_sold,min_eth,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferOutput',
    type: 'function',
    signature: 'tokenToEthTransferOutput(uint256,uint256,uint256,address)',
    encoding: '0xd4e4841d',
    input_names: 'eth_bought,max_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapInput',
    type: 'function',
    signature: 'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb1cb43bf',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapOutput',
    type: 'function',
    signature: 'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xea650c7d',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferInput',
    type: 'function',
    signature: 'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xec384a3e',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferOutput',
    type: 'function',
    signature: 'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0x981a1327',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapInput',
    type: 'function',
    signature: 'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xddf7e1a7',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapOutput',
    type: 'function',
    signature: 'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb040d545',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferInput',
    type: 'function',
    signature: 'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf552d91b',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferOutput',
    type: 'function',
    signature: 'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf3c0efe9',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'out,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'AddLiquidity',
    type: 'event',
    signature: 'AddLiquidity(address,uint256,uint256)',
    encoding: '0x06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'EthPurchase',
    type: 'event',
    signature: 'EthPurchase(address,uint256,uint256)',
    encoding: '0x7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b353984238705',
    input_names: 'buyer,tokens_sold,eth_bought,'
  },
  {
    name: 'RemoveLiquidity',
    type: 'event',
    signature: 'RemoveLiquidity(address,uint256,uint256)',
    encoding: '0x0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e8',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'TokenPurchase',
    type: 'event',
    signature: 'TokenPurchase(address,uint256,uint256)',
    encoding: '0xcd60aa75dea3072fbc07ae6d7d856b5dc5f4eee88854f5b4abf7b680ef8bc50f',
    input_names: 'buyer,eth_sold,tokens_bought,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256,uint256)',
    encoding: '0xaf8342fe',
    input_names: '_owners,_required,_daylimit,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256)',
    encoding: '0xfcd52c14',
    input_names: '_owners,_required,'
  },
  {
    type: 'fallback',
    signature: '()',
    encoding: '0x861731d5'
  },
  {
    name: 'MAX_OWNER_COUNT',
    type: 'function',
    signature: 'MAX_OWNER_COUNT()',
    encoding: '0xd74f8edd',
    output_names: 'val_0,'
  },
  {
    name: 'addOwner',
    type: 'function',
    signature: 'addOwner(address)',
    encoding: '0x7065cb48',
    input_names: '_owner,'
  },
  {
    name: 'changeOwner',
    type: 'function',
    signature: 'changeOwner(address,address)',
    encoding: '0xf00d4b5d',
    input_names: '_from,_to,'
  },
  {
    name: 'changeRequirement',
    type: 'function',
    signature: 'changeRequirement(uint256)',
    encoding: '0xba51a6df',
    input_names: '_newRequired,'
  },
  {
    name: 'confirm',
    type: 'function',
    signature: 'confirm(bytes32)',
    encoding: '0x797af627',
    input_names: '_h,',
    output_names: 'val_0,'
  },
  {
    name: 'confirmTransaction',
    type: 'function',
    signature: 'confirmTransaction(uint256)',
    encoding: '0xc01a8c84',
    input_names: 'transactionId,'
  },
  {
    name: 'confirmations',
    type: 'function',
    signature: 'confirmations(uint256,address)',
    encoding: '0x3411c81c',
    input_names: 'val_0,val_1,',
    output_names: 'val_0,'
  },
  {
    name: 'execute',
    type: 'function',
    signature: 'execute(address,uint256,bytes)',
    encoding: '0xb61d27f6',
    input_names: '_to,_value,_data,',
    output_names: '_r,'
  },
  {
    name: 'executeTransaction',
    type: 'function',
    signature: 'executeTransaction(uint256)',
    encoding: '0xee22610b',
    input_names: 'transactionId,'
  },
  {
    name: 'getConfirmationCount',
    type: 'function',
    signature: 'getConfirmationCount(uint256)',
    encoding: '0x8b51d13f',
    input_names: 'transactionId,',
    output_names: 'count,'
  },
  {
    name: 'getConfirmations',
    type: 'function',
    signature: 'getConfirmations(uint256)',
    encoding: '0xb5dc40c3',
    input_names: 'transactionId,',
    output_names: '_confirmations,'
  },
  {
    name: 'getOwners',
    type: 'function',
    signature: 'getOwners()',
    encoding: '0xa0e67e2b',
    output_names: 'val_0,'
  },
  {
    name: 'getTransactionCount',
    type: 'function',
    signature: 'getTransactionCount(bool,bool)',
    encoding: '0x54741525',
    input_names: 'pending,executed,',
    output_names: 'count,'
  },
  {
    name: 'getTransactionIds',
    type: 'function',
    signature: 'getTransactionIds(uint256,uint256,bool,bool)',
    encoding: '0xa8abe69a',
    input_names: 'from,to,pending,executed,',
    output_names: '_transactionIds,'
  },
  {
    name: 'hasConfirmed',
    type: 'function',
    signature: 'hasConfirmed(bytes32,address)',
    encoding: '0xc2cf7326',
    input_names: '_operation,_owner,',
    output_names: 'val_0,'
  },
  {
    name: 'isConfirmed',
    type: 'function',
    signature: 'isConfirmed(uint256)',
    encoding: '0x784547a7',
    input_names: 'transactionId,',
    output_names: 'val_0,'
  },
  {
    name: 'isOwner',
    type: 'function',
    signature: 'isOwner(address)',
    encoding: '0x2f54bf6e',
    input_names: '_addr,',
    output_names: 'val_0,'
  },
  {
    name: 'kill',
    type: 'function',
    signature: 'kill(address)',
    encoding: '0xcbf0b0c0',
    input_names: '_to,'
  },
  {
    name: 'm_dailyLimit',
    type: 'function',
    signature: 'm_dailyLimit()',
    encoding: '0xf1736d86',
    output_names: 'val_0,'
  },
  {
    name: 'm_numOwners',
    type: 'function',
    signature: 'm_numOwners()',
    encoding: '0x4123cb6b',
    output_names: 'val_0,'
  },
  {
    name: 'm_required',
    type: 'function',
    signature: 'm_required()',
    encoding: '0x746c9171',
    output_names: 'val_0,'
  },
  {
    name: 'owners',
    type: 'function',
    signature: 'owners(uint256)',
    encoding: '0x025e7c27',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'removeOwner',
    type: 'function',
    signature: 'removeOwner(address)',
    encoding: '0x173825d9',
    input_names: '_owner,'
  },
  {
    name: 'replaceOwner',
    type: 'function',
    signature: 'replaceOwner(address,address)',
    encoding: '0xe20056e6',
    input_names: 'owner,newOwner,'
  },
  {
    name: 'required',
    type: 'function',
    signature: 'required()',
    encoding: '0xdc8452cd',
    output_names: 'val_0,'
  },
  {
    name: 'resetSpentToday',
    type: 'function',
    signature: 'resetSpentToday()',
    encoding: '0x5c52c2f5'
  },
  {
    name: 'revoke',
    type: 'function',
    signature: 'revoke(bytes32)',
    encoding: '0xb75c7dc6',
    input_names: '_operation,'
  },
  {
    name: 'revokeConfirmation',
    type: 'function',
    signature: 'revokeConfirmation(uint256)',
    encoding: '0x20ea8d86',
    input_names: 'transactionId,'
  },
  {
    name: 'setDailyLimit',
    type: 'function',
    signature: 'setDailyLimit(uint256)',
    encoding: '0xb20d30a9',
    input_names: '_newLimit,'
  },
  {
    name: 'submitTransaction',
    type: 'function',
    signature: 'submitTransaction(address,uint256,bytes)',
    encoding: '0xc6427474',
    input_names: 'destination,value,data,',
    output_names: 'transactionId,'
  },
  {
    name: 'transactionCount',
    type: 'function',
    signature: 'transactionCount()',
    encoding: '0xb77bf600',
    output_names: 'val_0,'
  },
  {
    name: 'transactions',
    type: 'function',
    signature: 'transactions(uint256)',
    encoding: '0x9ace38c2',
    input_names: 'val_0,',
    output_names: 'destination,value,data,executed,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,uint256)',
    encoding: '0x4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,bytes32)',
    encoding: '0xe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda',
    input_names: 'owner,operation,'
  },
  {
    name: 'ConfirmationNeeded',
    type: 'event',
    signature: 'ConfirmationNeeded(bytes32,address,uint256,address,bytes)',
    encoding: '0x1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32',
    input_names: 'operation,initiator,value,to,data,'
  },
  {
    name: 'Deposit',
    type: 'event',
    signature: 'Deposit(address,uint256)',
    encoding: '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c',
    input_names: 'from,value,'
  },
  {
    name: 'Execution',
    type: 'event',
    signature: 'Execution(uint256)',
    encoding: '0x33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed75',
    input_names: '_transactionId,'
  },
  {
    name: 'ExecutionFailure',
    type: 'event',
    signature: 'ExecutionFailure(uint256)',
    encoding: '0x526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b79236',
    input_names: '_transactionId,'
  },
  {
    name: 'MultiTransact',
    type: 'event',
    signature: 'MultiTransact(address,bytes32,uint256,address,bytes)',
    encoding: '0xe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a',
    input_names: 'owner,operation,value,to,data,'
  },
  {
    name: 'OwnerAdded',
    type: 'event',
    signature: 'OwnerAdded(address)',
    encoding: '0x994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3',
    input_names: 'newOwner,'
  },
  {
    name: 'OwnerAddition',
    type: 'event',
    signature: 'OwnerAddition(address)',
    encoding: '0xf39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d',
    input_names: '_owner,'
  },
  {
    name: 'OwnerChanged',
    type: 'event',
    signature: 'OwnerChanged(address,address)',
    encoding: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
    input_names: 'oldOwner,newOwner,'
  },
  {
    name: 'OwnerRemoval',
    type: 'event',
    signature: 'OwnerRemoval(address)',
    encoding: '0x8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b90',
    input_names: '_owner,'
  },
  {
    name: 'OwnerRemoved',
    type: 'event',
    signature: 'OwnerRemoved(address)',
    encoding: '0x58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da',
    input_names: 'oldOwner,'
  },
  {
    name: 'RequirementChange',
    type: 'event',
    signature: 'RequirementChange(uint256)',
    encoding: '0xa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a',
    input_names: '_required,'
  },
  {
    name: 'RequirementChanged',
    type: 'event',
    signature: 'RequirementChanged(uint256)',
    encoding: '0xacbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da',
    input_names: 'newRequirement,'
  },
  {
    name: 'Revocation',
    type: 'event',
    signature: 'Revocation(address,uint256)',
    encoding: '0xf6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e9',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Revoke',
    type: 'event',
    signature: 'Revoke(address,bytes32)',
    encoding: '0xc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b',
    input_names: 'owner,operation,'
  },
  {
    name: 'SingleTransact',
    type: 'event',
    signature: 'SingleTransact(address,uint256,address,bytes)',
    encoding: '0x92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd004',
    input_names: 'owner,value,to,data,'
  },
  {
    name: 'Submission',
    type: 'event',
    signature: 'Submission(uint256)',
    encoding: '0xc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e51',
    input_names: '_transactionId,'
  },
  {
    name: '_doSafeBatchTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeBatchTransferAcceptanceCheck(address,address,address,uint256[],uint256[],bytes)',
    encoding: '0xe51c223d',
    input_names: '_operator,_from,_to,_ids,_values,_data,'
  },
  {
    name: '_doSafeTransferAcceptanceCheck',
    type: 'function',
    signature: '_doSafeTransferAcceptanceCheck(address,address,address,uint256,uint256,bytes)',
    encoding: '0x084e9e24',
    input_names: '_operator,_from,_to,_id,_value,_data,'
  },
  {
    name: 'add',
    type: 'function',
    signature: 'add(uint256,uint256)',
    encoding: '0x771602f7',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address,uint256)',
    encoding: '0x598af9e7',
    input_names: '_owner,_spender,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256,uint256,uint256)',
    encoding: '0x4f4df442',
    input_names: '_spender,_id,_currentValue,_value,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address,uint256)',
    encoding: '0x00fdd58e',
    input_names: '_owner,_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfBatch',
    type: 'function',
    signature: 'balanceOfBatch(address[],uint256[])',
    encoding: '0x4e1273f4',
    input_names: '_owners,_ids,',
    output_names: 'memory,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(uint256,string)',
    encoding: '0x0118fa49',
    input_names: '_initialSupply,_uri,',
    output_names: '_id,'
  },
  {
    name: 'create',
    type: 'function',
    signature: 'create(string,bool)',
    encoding: '0xcc10e401',
    input_names: '_uri,_isNF,',
    output_names: '_type,'
  },
  {
    name: 'div',
    type: 'function',
    signature: 'div(uint256,uint256)',
    encoding: '0xa391c15b',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleBaseType',
    type: 'function',
    signature: 'getNonFungibleBaseType(uint256)',
    encoding: '0x6f969c2d',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'getNonFungibleIndex',
    type: 'function',
    signature: 'getNonFungibleIndex(uint256)',
    encoding: '0x9cca1c64',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: 'account,',
    output_names: 'ret_0,'
  },
  {
    name: 'isFungible',
    type: 'function',
    signature: 'isFungible(uint256)',
    encoding: '0xadebf6f2',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungible',
    type: 'function',
    signature: 'isNonFungible(uint256)',
    encoding: '0xe44591f0',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleBaseType',
    type: 'function',
    signature: 'isNonFungibleBaseType(uint256)',
    encoding: '0x7269a327',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'isNonFungibleItem',
    type: 'function',
    signature: 'isNonFungibleItem(uint256)',
    encoding: '0x5e81b958',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(uint256,address[],uint256[])',
    encoding: '0xcfa84fc1',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintFungible',
    type: 'function',
    signature: 'mintFungible(uint256,address[],uint256[])',
    encoding: '0x78b27221',
    input_names: '_id,_to,_quantities,'
  },
  {
    name: 'mintNonFungible',
    type: 'function',
    signature: 'mintNonFungible(uint256,address[])',
    encoding: '0xf9419088',
    input_names: '_type,_to,'
  },
  {
    name: 'mul',
    type: 'function',
    signature: 'mul(uint256,uint256)',
    encoding: '0xc8a4ac9c',
    input_names: 'a,b,',
    output_names: 'c,'
  },
  {
    name: 'onERC1155BatchReceived',
    type: 'function',
    signature: 'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xbc197c81',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC1155Received',
    type: 'function',
    signature: 'onERC1155Received(address,address,uint256,uint256,bytes)',
    encoding: '0xf23a6e61',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXBatchReceived',
    type: 'function',
    signature: 'onERCXXXXBatchReceived(address,address,uint256[],uint256[],bytes)',
    encoding: '0xe9e5be6a',
    input_names: '_operator,_from,_ids,_values,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERCXXXXReceived',
    type: 'function',
    signature: 'onERCXXXXReceived(address,address,uint256,uint256,bytes)',
    encoding: '0xeb510be8',
    input_names: '_operator,_from,_id,_value,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_id,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeBatchTransferFrom',
    type: 'function',
    signature: 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    encoding: '0x2eb2c2d6',
    input_names: '_from,_to,_ids,_values,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,uint256,bytes)',
    encoding: '0xf242432a',
    input_names: '_from,_to,_id,_value,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'setCompleted',
    type: 'function',
    signature: 'setCompleted(uint256)',
    encoding: '0xfdacd576',
    input_names: 'completed,'
  },
  {
    name: 'setShouldReject',
    type: 'function',
    signature: 'setShouldReject(bool)',
    encoding: '0xa175b638',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectClash',
    type: 'function',
    signature: 'setShouldRejectClash(bool)',
    encoding: '0x2090dd24',
    input_names: '_value,'
  },
  {
    name: 'setShouldRejectXXXX',
    type: 'function',
    signature: 'setShouldRejectXXXX(bool)',
    encoding: '0x80f5fe74',
    input_names: '_value,'
  },
  {
    name: 'setURI',
    type: 'function',
    signature: 'setURI(string,uint256)',
    encoding: '0x67db3b8f',
    input_names: '_uri,_id,'
  },
  {
    name: 'sub',
    type: 'function',
    signature: 'sub(uint256,uint256)',
    encoding: '0xb67d77c5',
    input_names: 'a,b,',
    output_names: 'ret_0,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'updateContract',
    type: 'function',
    signature: 'updateContract(address,string,string)',
    encoding: '0x61455567',
    input_names: '_delegate,_functionSignatures,_commitMessage,'
  },
  {
    name: 'upgrade',
    type: 'function',
    signature: 'upgrade(address)',
    encoding: '0x0900f010',
    input_names: 'new_address,'
  },
  {
    name: 'uri',
    type: 'function',
    signature: 'uri(uint256)',
    encoding: '0x0e89341c',
    input_names: '_id,',
    output_names: 'memory,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256,uint256,uint256)',
    encoding: '0x3a9c85c6b31f7a9d7fe1478f53e1be42e85db97ca30d1789cfef9196dbc472c9',
    input_names: '_owner,_spender,_id,_oldValue,_value,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'CommitMessage',
    type: 'event',
    signature: 'CommitMessage(string)',
    encoding: '0xaa1c0a0a78cec2470f9652e5d29540752e7a64d70f926933cebf13afaeda45de',
    input_names: 'message,'
  },
  {
    name: 'FunctionUpdate',
    type: 'event',
    signature: 'FunctionUpdate(bytes4,address,address,string)',
    encoding: '0x3234040ce3bd4564874e44810f198910133a1b24c4e84aac87edbf6b458f5353',
    input_names: 'functionId,oldDelegate,newDelegate,functionSignature,'
  },
  {
    name: 'TransferBatch',
    type: 'event',
    signature: 'TransferBatch(address,address,address,uint256[],uint256[])',
    encoding: '0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb',
    input_names: '_operator,_from,_to,_ids,_values,'
  },
  {
    name: 'TransferSingle',
    type: 'event',
    signature: 'TransferSingle(address,address,address,uint256,uint256)',
    encoding: '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
    input_names: '_operator,_from,_to,_id,_value,'
  },
  {
    name: 'URI',
    type: 'event',
    signature: 'URI(string,uint256)',
    encoding: '0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b',
    input_names: '_value,_id,'
  },
  {
    name: 'canTransfer',
    type: 'function',
    signature: 'canTransfer(address,uint256,bytes)',
    encoding: '0x1badb25c',
    input_names: '_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'canTransferFrom',
    type: 'function',
    signature: 'canTransferFrom(address,address,uint256,bytes)',
    encoding: '0x122eb575',
    input_names: '_from,_to,_value,_data,',
    output_names: 'ret_0,ret_1,ret_2,'
  },
  {
    name: 'isIssuable',
    type: 'function',
    signature: 'isIssuable()',
    encoding: '0x2f1cae85',
    output_names: 'ret_0,'
  },
  {
    name: 'issue',
    type: 'function',
    signature: 'issue(address,uint256,bytes)',
    encoding: '0xbb3acde9',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'redeem',
    type: 'function',
    signature: 'redeem(uint256,bytes)',
    encoding: '0xe77c646d',
    input_names: '_value,_data,'
  },
  {
    name: 'redeemFrom',
    type: 'function',
    signature: 'redeemFrom(address,uint256,bytes)',
    encoding: '0x9675193c',
    input_names: '_tokenHolder,_value,_data,'
  },
  {
    name: 'transferFromWithData',
    type: 'function',
    signature: 'transferFromWithData(address,address,uint256,bytes)',
    encoding: '0xee532f31',
    input_names: '_from,_to,_value,_data,'
  },
  {
    name: 'transferWithData',
    type: 'function',
    signature: 'transferWithData(address,uint256,bytes)',
    encoding: '0x2535f762',
    input_names: '_to,_value,_data,'
  },
  {
    name: 'Issued',
    type: 'event',
    signature: 'Issued(address,address,uint256,bytes)',
    encoding: '0x0e9905d62635f049c2f4e11678ebf9dc3d1f8c4a653e290759b772e47ba00d00',
    input_names: '_operator,_to,_value,_data,'
  },
  {
    name: 'Redeemed',
    type: 'event',
    signature: 'Redeemed(address,address,uint256,bytes)',
    encoding: '0xb7d0d6b60740753e9f16692a2f479472a1385aec2420fa43225b02f2ffa1afe7',
    input_names: '_operator,_from,_value,_data,'
  },
  {
    name: 'supportsInterface',
    type: 'function',
    signature: 'supportsInterface(bytes4)',
    encoding: '0x01ffc9a7',
    input_names: 'interfaceID,',
    output_names: 'ret_0,'
  },
  {
    name: 'canImplementInterfaceForAddress',
    type: 'function',
    signature: 'canImplementInterfaceForAddress(bytes32,address)',
    encoding: '0x249cb3fa',
    input_names: 'interfaceHash,addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'getInterfaceImplementer',
    type: 'function',
    signature: 'getInterfaceImplementer(address,bytes32)',
    encoding: '0xaabbb8ca',
    input_names: '_addr,_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'getManager',
    type: 'function',
    signature: 'getManager(address)',
    encoding: '0x3d584063',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165Interface',
    type: 'function',
    signature: 'implementsERC165Interface(address,bytes4)',
    encoding: '0xf712f3e8',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'implementsERC165InterfaceNoCache',
    type: 'function',
    signature: 'implementsERC165InterfaceNoCache(address,bytes4)',
    encoding: '0xb7056765',
    input_names: '_contract,_interfaceId,',
    output_names: 'ret_0,'
  },
  {
    name: 'interfaceHash',
    type: 'function',
    signature: 'interfaceHash(string)',
    encoding: '0x65ba36c1',
    input_names: '_interfaceName,',
    output_names: 'ret_0,'
  },
  {
    name: 'isERC165Interface',
    type: 'function',
    signature: 'isERC165Interface(bytes32)',
    encoding: '0x9d4cf268',
    input_names: '_interfaceHash,',
    output_names: 'ret_0,'
  },
  {
    name: 'noThrowCall',
    type: 'function',
    signature: 'noThrowCall(address,bytes4)',
    encoding: '0xf86cd33d',
    input_names: '_contract,_interfaceId,',
    output_names: 'success,result,'
  },
  {
    name: 'setInterfaceImplementer',
    type: 'function',
    signature: 'setInterfaceImplementer(address,bytes32,address)',
    encoding: '0x29965a1d',
    input_names: '_addr,_interfaceHash,_implementer,'
  },
  {
    name: 'setManager',
    type: 'function',
    signature: 'setManager(address,address)',
    encoding: '0x5df8122f',
    input_names: '_addr,_newManager,'
  },
  {
    name: 'updateERC165Cache',
    type: 'function',
    signature: 'updateERC165Cache(address,bytes4)',
    encoding: '0xa41e7d51',
    input_names: '_contract,_interfaceId,'
  },
  {
    name: 'InterfaceImplementerSet',
    type: 'event',
    signature: 'InterfaceImplementerSet(address,bytes32,address)',
    encoding: '0x93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db153',
    input_names: 'addr,interfaceHash,implementer,'
  },
  {
    name: 'ManagerChanged',
    type: 'event',
    signature: 'ManagerChanged(address,address)',
    encoding: '0x605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a4350',
    input_names: 'addr,newManager,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'ret_0,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: '_name,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_tokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: '_symbol,'
  },
  {
    name: 'tokenURI',
    type: 'function',
    signature: 'tokenURI(uint256)',
    encoding: '0xc87b56dd',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_approved,_tokenId,'
  },
  {
    name: 'ApprovalForAll',
    type: 'event',
    signature: 'ApprovalForAll(address,address,bool)',
    encoding: '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
    input_names: '_owner,_operator,_approved,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'authorizeOperator',
    type: 'function',
    signature: 'authorizeOperator(address)',
    encoding: '0x959b8c3f',
    input_names: 'operator,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: 'holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'burn',
    type: 'function',
    signature: 'burn(uint256,bytes)',
    encoding: '0xfe9d9303',
    input_names: 'amount,data,'
  },
  {
    name: 'defaultOperators',
    type: 'function',
    signature: 'defaultOperators()',
    encoding: '0x06e48538',
    output_names: 'memory,'
  },
  {
    name: 'granularity',
    type: 'function',
    signature: 'granularity()',
    encoding: '0x556f0dc7',
    output_names: 'ret_0,'
  },
  {
    name: 'isOperatorFor',
    type: 'function',
    signature: 'isOperatorFor(address,address)',
    encoding: '0xd95b6371',
    input_names: 'operator,holder,',
    output_names: 'ret_0,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'memory,'
  },
  {
    name: 'operatorBurn',
    type: 'function',
    signature: 'operatorBurn(address,uint256,bytes,bytes)',
    encoding: '0xfc673c4f',
    input_names: 'from,amount,data,operatorData,'
  },
  {
    name: 'operatorSend',
    type: 'function',
    signature: 'operatorSend(address,address,uint256,bytes,bytes)',
    encoding: '0x62ad1b83',
    input_names: 'from,to,amount,data,operatorData,'
  },
  {
    name: 'revokeOperator',
    type: 'function',
    signature: 'revokeOperator(address)',
    encoding: '0xfad8b32a',
    input_names: 'operator,'
  },
  {
    name: 'send',
    type: 'function',
    signature: 'send(address,uint256,bytes)',
    encoding: '0x9bd9bbc6',
    input_names: 'to,amount,data,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'memory,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'ret_0,'
  },
  {
    name: 'AuthorizedOperator',
    type: 'event',
    signature: 'AuthorizedOperator(address,address)',
    encoding: '0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9',
    input_names: 'operator,holder,'
  },
  {
    name: 'Burned',
    type: 'event',
    signature: 'Burned(address,address,uint256,bytes,bytes)',
    encoding: '0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098',
    input_names: 'operator,from,amount,data,operatorData,'
  },
  {
    name: 'Minted',
    type: 'event',
    signature: 'Minted(address,address,uint256,bytes,bytes)',
    encoding: '0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d',
    input_names: 'operator,to,amount,data,operatorData,'
  },
  {
    name: 'RevokedOperator',
    type: 'event',
    signature: 'RevokedOperator(address,address)',
    encoding: '0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1',
    input_names: 'operator,holder,'
  },
  {
    name: 'Sent',
    type: 'event',
    signature: 'Sent(address,address,address,uint256,bytes,bytes)',
    encoding: '0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987',
    input_names: 'operator,from,to,amount,data,operatorData,'
  },
  {
    name: '_ownerOfChild',
    type: 'function',
    signature: '_ownerOfChild(address,uint256)',
    encoding: '0xa5aeb1d4',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: '_transferFrom',
    type: 'function',
    signature: '_transferFrom(address,address,uint256)',
    encoding: '0xcb712535',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'remaining,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_approved,_tokenId,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_tokenOwner,',
    output_names: 'ret_0,'
  },
  {
    name: 'balanceOfERC20',
    type: 'function',
    signature: 'balanceOfERC20(uint256,address)',
    encoding: '0xe226ed22',
    input_names: '_tokenId,__erc20Contract,',
    output_names: 'ret_0,'
  },
  {
    name: 'childContractByIndex',
    type: 'function',
    signature: 'childContractByIndex(uint256,uint256)',
    encoding: '0x0d5a621b',
    input_names: '_tokenId,_index,',
    output_names: 'childContract,'
  },
  {
    name: 'childExists',
    type: 'function',
    signature: 'childExists(address,uint256)',
    encoding: '0x5680a3ad',
    input_names: '_childContract,_childTokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'childTokenByIndex',
    type: 'function',
    signature: 'childTokenByIndex(uint256,address,uint256)',
    encoding: '0x160b01a1',
    input_names: '_tokenId,_childContract,_index,',
    output_names: 'childTokenId,'
  },
  {
    name: 'erc20ContractByIndex',
    type: 'function',
    signature: 'erc20ContractByIndex(uint256,uint256)',
    encoding: '0x627c81ff',
    input_names: '_tokenId,_index,',
    output_names: 'ret_0,'
  },
  {
    name: 'erc20Received',
    type: 'function',
    signature: 'erc20Received(address,uint256,address,uint256)',
    encoding: '0x9e95670d',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'getApproved',
    type: 'function',
    signature: 'getApproved(uint256)',
    encoding: '0x081812fc',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'getChild',
    type: 'function',
    signature: 'getChild(address,uint256,address,uint256)',
    encoding: '0xba6b5f96',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'getERC20',
    type: 'function',
    signature: 'getERC20(address,uint256,address,uint256)',
    encoding: '0x07cff6f2',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'isApprovedForAll',
    type: 'function',
    signature: 'isApprovedForAll(address,address)',
    encoding: '0xe985e9c5',
    input_names: '_owner,_operator,',
    output_names: 'ret_0,'
  },
  {
    name: 'isContract',
    type: 'function',
    signature: 'isContract(address)',
    encoding: '0x16279055',
    input_names: '_addr,',
    output_names: 'ret_0,'
  },
  {
    name: 'mint',
    type: 'function',
    signature: 'mint(address)',
    encoding: '0x6a627842',
    input_names: '_to,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,address,uint256,bytes)',
    encoding: '0x150b7a02',
    input_names: '_operator,_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'onERC721Received',
    type: 'function',
    signature: 'onERC721Received(address,uint256,bytes)',
    encoding: '0xf0b9e5ba',
    input_names: '_from,_childTokenId,_data,',
    output_names: 'ret_0,'
  },
  {
    name: 'ownerOf',
    type: 'function',
    signature: 'ownerOf(uint256)',
    encoding: '0x6352211e',
    input_names: '_tokenId,',
    output_names: 'tokenOwner,'
  },
  {
    name: 'ownerOfChild',
    type: 'function',
    signature: 'ownerOfChild(address,uint256)',
    encoding: '0xeadb80b8',
    input_names: '_childContract,_childTokenId,',
    output_names: 'parentTokenOwner,parentTokenId,'
  },
  {
    name: 'receiveChild',
    type: 'function',
    signature: 'receiveChild(address,uint256,address,uint256)',
    encoding: '0x597c255f',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeChild',
    type: 'function',
    signature: 'removeChild(uint256,address,uint256)',
    encoding: '0x0f0ba766',
    input_names: '_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'removeERC20',
    type: 'function',
    signature: 'removeERC20(uint256,address,uint256)',
    encoding: '0x9771ccc8',
    input_names: '_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'rootOwnerOf',
    type: 'function',
    signature: 'rootOwnerOf(uint256)',
    encoding: '0x43a61a8e',
    input_names: '_tokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'rootOwnerOfChild',
    type: 'function',
    signature: 'rootOwnerOfChild(address,uint256)',
    encoding: '0xed81cdda',
    input_names: '_childContract,_childTokenId,',
    output_names: 'rootOwner,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256)',
    encoding: '0x1d98f3c5',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'safeTransferChild',
    type: 'function',
    signature: 'safeTransferChild(uint256,address,address,uint256,bytes)',
    encoding: '0x8d81f51e',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,_data,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256)',
    encoding: '0x42842e0e',
    input_names: '_from,_to,_tokenId,'
  },
  {
    name: 'safeTransferFrom',
    type: 'function',
    signature: 'safeTransferFrom(address,address,uint256,bytes)',
    encoding: '0xb88d4fde',
    input_names: '_from,_to,_tokenId,_data,'
  },
  {
    name: 'setApprovalForAll',
    type: 'function',
    signature: 'setApprovalForAll(address,bool)',
    encoding: '0xa22cb465',
    input_names: '_operator,_approved,'
  },
  {
    name: 'tokenFallback',
    type: 'function',
    signature: 'tokenFallback(address,uint256,bytes)',
    encoding: '0xc0ee0b8a',
    input_names: '_from,_value,_data,'
  },
  {
    name: 'totalChildContracts',
    type: 'function',
    signature: 'totalChildContracts(uint256)',
    encoding: '0x8da7d0b5',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalChildTokens',
    type: 'function',
    signature: 'totalChildTokens(uint256,address)',
    encoding: '0x35b21ceb',
    input_names: '_tokenId,_childContract,',
    output_names: 'ret_0,'
  },
  {
    name: 'totalERC20Contracts',
    type: 'function',
    signature: 'totalERC20Contracts(uint256)',
    encoding: '0xa7811732',
    input_names: '_tokenId,',
    output_names: 'ret_0,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: 'to,value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256,bytes)',
    encoding: '0xbe45fd62',
    input_names: 'to,value,data,',
    output_names: 'success,'
  },
  {
    name: 'transferChild',
    type: 'function',
    signature: 'transferChild(uint256,address,address,uint256)',
    encoding: '0xbef44f18',
    input_names: '_fromTokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'transferChildToParent',
    type: 'function',
    signature: 'transferChildToParent(uint256,address,uint256,address,uint256,bytes)',
    encoding: '0x08937f62',
    input_names: '_fromTokenId,_toContract,_toTokenId,_childContract,_childTokenId,_data,'
  },
  {
    name: 'transferERC20',
    type: 'function',
    signature: 'transferERC20(uint256,address,address,uint256)',
    encoding: '0x830ef41b',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'transferERC223',
    type: 'function',
    signature: 'transferERC223(uint256,address,address,uint256,bytes)',
    encoding: '0xd49d1bac',
    input_names: '_tokenId,_to,_erc223Contract,_value,_data,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferToParent',
    type: 'function',
    signature: 'transferToParent(address,address,uint256,uint256,bytes)',
    encoding: '0xf50acfa0',
    input_names: '_from,_toContract,_toTokenId,_tokenId,_data,'
  },
  {
    name: 'ReceivedChild',
    type: 'event',
    signature: 'ReceivedChild(address,uint256,address,uint256)',
    encoding: '0x0371ddf2288ad1ba92626a7e31c86a9d006e592cfe57d7d946ef08b13457c08b',
    input_names: '_from,_tokenId,_childContract,_childTokenId,'
  },
  {
    name: 'ReceivedERC20',
    type: 'event',
    signature: 'ReceivedERC20(address,uint256,address,uint256)',
    encoding: '0x684ce28ace37552c6bfb98b7cceda8ed55327078eafb5dfb31218e0856382763',
    input_names: '_from,_tokenId,_erc20Contract,_value,'
  },
  {
    name: 'TransferChild',
    type: 'event',
    signature: 'TransferChild(uint256,address,address,uint256)',
    encoding: '0x0ef52e516fb5aec15a5d3587e5480481b702b26db93c8430eca78b61990fd3f6',
    input_names: 'tokenId,_to,_childContract,_childTokenId,'
  },
  {
    name: 'TransferERC20',
    type: 'event',
    signature: 'TransferERC20(uint256,address,address,uint256)',
    encoding: '0xa8352277873fc0d2b233b8127433da351a4164fa701ed6ff79655694222932c4',
    input_names: '_tokenId,_to,_erc20Contract,_value,'
  },
  {
    name: 'authority',
    type: 'function',
    signature: 'authority()',
    encoding: '0xbf7e214f',
    output_names: 'val_0,'
  },
  {
    name: 'compute',
    type: 'function',
    signature: 'compute()',
    encoding: '0x1a43c338',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'indexes',
    type: 'function',
    signature: 'indexes(address)',
    encoding: '0x2db78d93',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'min',
    type: 'function',
    signature: 'min()',
    encoding: '0xf8897945',
    output_names: 'val_0,'
  },
  {
    name: 'next',
    type: 'function',
    signature: 'next()',
    encoding: '0x4c8fe526',
    output_names: 'val_0,'
  },
  {
    name: 'owner',
    type: 'function',
    signature: 'owner()',
    encoding: '0x8da5cb5b',
    output_names: 'val_0,'
  },
  {
    name: 'peek',
    type: 'function',
    signature: 'peek()',
    encoding: '0x59e02dd7',
    output_names: 'val_0,val_1,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke(bytes32)',
    encoding: '0x1504460f',
    input_names: 'val_0,'
  },
  {
    name: 'poke',
    type: 'function',
    signature: 'poke()',
    encoding: '0x18178358'
  },
  {
    name: 'read',
    type: 'function',
    signature: 'read()',
    encoding: '0x57de26a4',
    output_names: 'val_0,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(address)',
    encoding: '0x2801617e',
    input_names: 'wat,'
  },
  {
    name: 'set',
    type: 'function',
    signature: 'set(bytes12,address)',
    encoding: '0xbeb38b43',
    input_names: 'pos,wat,'
  },
  {
    name: 'setAuthority',
    type: 'function',
    signature: 'setAuthority(address)',
    encoding: '0x7a9e5e4b',
    input_names: 'authority_,'
  },
  {
    name: 'setMin',
    type: 'function',
    signature: 'setMin(uint96)',
    encoding: '0x6ba5ef0d',
    input_names: 'min_,'
  },
  {
    name: 'setNext',
    type: 'function',
    signature: 'setNext(bytes12)',
    encoding: '0xf2c5925d',
    input_names: 'next_,'
  },
  {
    name: 'setOwner',
    type: 'function',
    signature: 'setOwner(address)',
    encoding: '0x13af4035',
    input_names: 'owner_,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(address)',
    encoding: '0x2966d1b9',
    input_names: 'wat,'
  },
  {
    name: 'unset',
    type: 'function',
    signature: 'unset(bytes12)',
    encoding: '0xe0a1fdad',
    input_names: 'pos,'
  },
  {
    name: 'values',
    type: 'function',
    signature: 'values(bytes12)',
    encoding: '0x651dd0de',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'void',
    type: 'function',
    signature: 'void()',
    encoding: '0xac4c25b2'
  },
  {
    name: 'LogNote',
    type: 'event',
    signature: 'LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)',
    encoding: '0x644843f351d3fba4abcd60109eaff9f54bac8fb8ccf0bab941009c21df21cf31',
    input_names: 'sig,guy,foo,bar,wad,fax,'
  },
  {
    name: 'LogSetAuthority',
    type: 'event',
    signature: 'LogSetAuthority(address)',
    encoding: '0x1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada4',
    input_names: 'authority,'
  },
  {
    name: 'LogSetOwner',
    type: 'event',
    signature: 'LogSetOwner(address)',
    encoding: '0xce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94',
    input_names: 'owner,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'success,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'success,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    name: '__default__',
    type: 'function',
    signature: '__default__()',
    encoding: '0x89402a72'
  },
  {
    name: 'addLiquidity',
    type: 'function',
    signature: 'addLiquidity(uint256,uint256,uint256)',
    encoding: '0x422f1043',
    input_names: 'min_liquidity,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'allowance',
    type: 'function',
    signature: 'allowance(address,address)',
    encoding: '0xdd62ed3e',
    input_names: '_owner,_spender,',
    output_names: 'out,'
  },
  {
    name: 'approve',
    type: 'function',
    signature: 'approve(address,uint256)',
    encoding: '0x095ea7b3',
    input_names: '_spender,_value,',
    output_names: 'out,'
  },
  {
    name: 'balanceOf',
    type: 'function',
    signature: 'balanceOf(address)',
    encoding: '0x70a08231',
    input_names: '_owner,',
    output_names: 'out,'
  },
  {
    name: 'decimals',
    type: 'function',
    signature: 'decimals()',
    encoding: '0x313ce567',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapInput',
    type: 'function',
    signature: 'ethToTokenSwapInput(uint256,uint256)',
    encoding: '0xf39b5b9b',
    input_names: 'min_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenSwapOutput',
    type: 'function',
    signature: 'ethToTokenSwapOutput(uint256,uint256)',
    encoding: '0x6b1d4db7',
    input_names: 'tokens_bought,deadline,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferInput',
    type: 'function',
    signature: 'ethToTokenTransferInput(uint256,uint256,address)',
    encoding: '0xad65d76d',
    input_names: 'min_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'ethToTokenTransferOutput',
    type: 'function',
    signature: 'ethToTokenTransferOutput(uint256,uint256,address)',
    encoding: '0x0b573638',
    input_names: 'tokens_bought,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'factoryAddress',
    type: 'function',
    signature: 'factoryAddress()',
    encoding: '0x966dae0e',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenInputPrice',
    type: 'function',
    signature: 'getEthToTokenInputPrice(uint256)',
    encoding: '0xcd7724c3',
    input_names: 'eth_sold,',
    output_names: 'out,'
  },
  {
    name: 'getEthToTokenOutputPrice',
    type: 'function',
    signature: 'getEthToTokenOutputPrice(uint256)',
    encoding: '0x59e94862',
    input_names: 'tokens_bought,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthInputPrice',
    type: 'function',
    signature: 'getTokenToEthInputPrice(uint256)',
    encoding: '0x95b68fe7',
    input_names: 'tokens_sold,',
    output_names: 'out,'
  },
  {
    name: 'getTokenToEthOutputPrice',
    type: 'function',
    signature: 'getTokenToEthOutputPrice(uint256)',
    encoding: '0x2640f62c',
    input_names: 'eth_bought,',
    output_names: 'out,'
  },
  {
    name: 'name',
    type: 'function',
    signature: 'name()',
    encoding: '0x06fdde03',
    output_names: 'out,'
  },
  {
    name: 'removeLiquidity',
    type: 'function',
    signature: 'removeLiquidity(uint256,uint256,uint256,uint256)',
    encoding: '0xf88bf15a',
    input_names: 'amount,min_eth,min_tokens,deadline,',
    output_names: 'out,out,'
  },
  {
    name: 'setup',
    type: 'function',
    signature: 'setup(address)',
    encoding: '0x66d38203',
    input_names: 'token_addr,'
  },
  {
    name: 'symbol',
    type: 'function',
    signature: 'symbol()',
    encoding: '0x95d89b41',
    output_names: 'out,'
  },
  {
    name: 'tokenAddress',
    type: 'function',
    signature: 'tokenAddress()',
    encoding: '0x9d76ea58',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapInput',
    type: 'function',
    signature: 'tokenToEthSwapInput(uint256,uint256,uint256)',
    encoding: '0x95e3c50b',
    input_names: 'tokens_sold,min_eth,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthSwapOutput',
    type: 'function',
    signature: 'tokenToEthSwapOutput(uint256,uint256,uint256)',
    encoding: '0x013efd8b',
    input_names: 'eth_bought,max_tokens,deadline,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferInput',
    type: 'function',
    signature: 'tokenToEthTransferInput(uint256,uint256,uint256,address)',
    encoding: '0x7237e031',
    input_names: 'tokens_sold,min_eth,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToEthTransferOutput',
    type: 'function',
    signature: 'tokenToEthTransferOutput(uint256,uint256,uint256,address)',
    encoding: '0xd4e4841d',
    input_names: 'eth_bought,max_tokens,deadline,recipient,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapInput',
    type: 'function',
    signature: 'tokenToExchangeSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb1cb43bf',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeSwapOutput',
    type: 'function',
    signature: 'tokenToExchangeSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xea650c7d',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferInput',
    type: 'function',
    signature: 'tokenToExchangeTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xec384a3e',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToExchangeTransferOutput',
    type: 'function',
    signature: 'tokenToExchangeTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0x981a1327',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,exchange_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapInput',
    type: 'function',
    signature: 'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xddf7e1a7',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenSwapOutput',
    type: 'function',
    signature: 'tokenToTokenSwapOutput(uint256,uint256,uint256,uint256,address)',
    encoding: '0xb040d545',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferInput',
    type: 'function',
    signature: 'tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf552d91b',
    input_names: 'tokens_sold,min_tokens_bought,min_eth_bought,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'tokenToTokenTransferOutput',
    type: 'function',
    signature: 'tokenToTokenTransferOutput(uint256,uint256,uint256,uint256,address,address)',
    encoding: '0xf3c0efe9',
    input_names: 'tokens_bought,max_tokens_sold,max_eth_sold,deadline,recipient,token_addr,',
    output_names: 'out,'
  },
  {
    name: 'totalSupply',
    type: 'function',
    signature: 'totalSupply()',
    encoding: '0x18160ddd',
    output_names: 'out,'
  },
  {
    name: 'transfer',
    type: 'function',
    signature: 'transfer(address,uint256)',
    encoding: '0xa9059cbb',
    input_names: '_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'transferFrom',
    type: 'function',
    signature: 'transferFrom(address,address,uint256)',
    encoding: '0x23b872dd',
    input_names: '_from,_to,_value,',
    output_names: 'out,'
  },
  {
    name: 'AddLiquidity',
    type: 'event',
    signature: 'AddLiquidity(address,uint256,uint256)',
    encoding: '0x06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'Approval',
    type: 'event',
    signature: 'Approval(address,address,uint256)',
    encoding: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    input_names: '_owner,_spender,_value,'
  },
  {
    name: 'EthPurchase',
    type: 'event',
    signature: 'EthPurchase(address,uint256,uint256)',
    encoding: '0x7f4091b46c33e918a0f3aa42307641d17bb67029427a5369e54b353984238705',
    input_names: 'buyer,tokens_sold,eth_bought,'
  },
  {
    name: 'RemoveLiquidity',
    type: 'event',
    signature: 'RemoveLiquidity(address,uint256,uint256)',
    encoding: '0x0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e8',
    input_names: 'provider,eth_amount,token_amount,'
  },
  {
    name: 'TokenPurchase',
    type: 'event',
    signature: 'TokenPurchase(address,uint256,uint256)',
    encoding: '0xcd60aa75dea3072fbc07ae6d7d856b5dc5f4eee88854f5b4abf7b680ef8bc50f',
    input_names: 'buyer,eth_sold,tokens_bought,'
  },
  {
    name: 'Transfer',
    type: 'event',
    signature: 'Transfer(address,address,uint256)',
    encoding: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    input_names: '_from,_to,_value,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256,uint256)',
    encoding: '0xaf8342fe',
    input_names: '_owners,_required,_daylimit,'
  },
  {
    type: 'constructor',
    signature: '(address[],uint256)',
    encoding: '0xfcd52c14',
    input_names: '_owners,_required,'
  },
  {
    type: 'fallback',
    signature: '()',
    encoding: '0x861731d5'
  },
  {
    name: 'MAX_OWNER_COUNT',
    type: 'function',
    signature: 'MAX_OWNER_COUNT()',
    encoding: '0xd74f8edd',
    output_names: 'val_0,'
  },
  {
    name: 'addOwner',
    type: 'function',
    signature: 'addOwner(address)',
    encoding: '0x7065cb48',
    input_names: '_owner,'
  },
  {
    name: 'changeOwner',
    type: 'function',
    signature: 'changeOwner(address,address)',
    encoding: '0xf00d4b5d',
    input_names: '_from,_to,'
  },
  {
    name: 'changeRequirement',
    type: 'function',
    signature: 'changeRequirement(uint256)',
    encoding: '0xba51a6df',
    input_names: '_newRequired,'
  },
  {
    name: 'confirm',
    type: 'function',
    signature: 'confirm(bytes32)',
    encoding: '0x797af627',
    input_names: '_h,',
    output_names: 'val_0,'
  },
  {
    name: 'confirmTransaction',
    type: 'function',
    signature: 'confirmTransaction(uint256)',
    encoding: '0xc01a8c84',
    input_names: 'transactionId,'
  },
  {
    name: 'confirmations',
    type: 'function',
    signature: 'confirmations(uint256,address)',
    encoding: '0x3411c81c',
    input_names: 'val_0,val_1,',
    output_names: 'val_0,'
  },
  {
    name: 'execute',
    type: 'function',
    signature: 'execute(address,uint256,bytes)',
    encoding: '0xb61d27f6',
    input_names: '_to,_value,_data,',
    output_names: '_r,'
  },
  {
    name: 'executeTransaction',
    type: 'function',
    signature: 'executeTransaction(uint256)',
    encoding: '0xee22610b',
    input_names: 'transactionId,'
  },
  {
    name: 'getConfirmationCount',
    type: 'function',
    signature: 'getConfirmationCount(uint256)',
    encoding: '0x8b51d13f',
    input_names: 'transactionId,',
    output_names: 'count,'
  },
  {
    name: 'getConfirmations',
    type: 'function',
    signature: 'getConfirmations(uint256)',
    encoding: '0xb5dc40c3',
    input_names: 'transactionId,',
    output_names: '_confirmations,'
  },
  {
    name: 'getOwners',
    type: 'function',
    signature: 'getOwners()',
    encoding: '0xa0e67e2b',
    output_names: 'val_0,'
  },
  {
    name: 'getTransactionCount',
    type: 'function',
    signature: 'getTransactionCount(bool,bool)',
    encoding: '0x54741525',
    input_names: 'pending,executed,',
    output_names: 'count,'
  },
  {
    name: 'getTransactionIds',
    type: 'function',
    signature: 'getTransactionIds(uint256,uint256,bool,bool)',
    encoding: '0xa8abe69a',
    input_names: 'from,to,pending,executed,',
    output_names: '_transactionIds,'
  },
  {
    name: 'hasConfirmed',
    type: 'function',
    signature: 'hasConfirmed(bytes32,address)',
    encoding: '0xc2cf7326',
    input_names: '_operation,_owner,',
    output_names: 'val_0,'
  },
  {
    name: 'isConfirmed',
    type: 'function',
    signature: 'isConfirmed(uint256)',
    encoding: '0x784547a7',
    input_names: 'transactionId,',
    output_names: 'val_0,'
  },
  {
    name: 'isOwner',
    type: 'function',
    signature: 'isOwner(address)',
    encoding: '0x2f54bf6e',
    input_names: '_addr,',
    output_names: 'val_0,'
  },
  {
    name: 'kill',
    type: 'function',
    signature: 'kill(address)',
    encoding: '0xcbf0b0c0',
    input_names: '_to,'
  },
  {
    name: 'm_dailyLimit',
    type: 'function',
    signature: 'm_dailyLimit()',
    encoding: '0xf1736d86',
    output_names: 'val_0,'
  },
  {
    name: 'm_numOwners',
    type: 'function',
    signature: 'm_numOwners()',
    encoding: '0x4123cb6b',
    output_names: 'val_0,'
  },
  {
    name: 'm_required',
    type: 'function',
    signature: 'm_required()',
    encoding: '0x746c9171',
    output_names: 'val_0,'
  },
  {
    name: 'owners',
    type: 'function',
    signature: 'owners(uint256)',
    encoding: '0x025e7c27',
    input_names: 'val_0,',
    output_names: 'val_0,'
  },
  {
    name: 'removeOwner',
    type: 'function',
    signature: 'removeOwner(address)',
    encoding: '0x173825d9',
    input_names: '_owner,'
  },
  {
    name: 'replaceOwner',
    type: 'function',
    signature: 'replaceOwner(address,address)',
    encoding: '0xe20056e6',
    input_names: 'owner,newOwner,'
  },
  {
    name: 'required',
    type: 'function',
    signature: 'required()',
    encoding: '0xdc8452cd',
    output_names: 'val_0,'
  },
  {
    name: 'resetSpentToday',
    type: 'function',
    signature: 'resetSpentToday()',
    encoding: '0x5c52c2f5'
  },
  {
    name: 'revoke',
    type: 'function',
    signature: 'revoke(bytes32)',
    encoding: '0xb75c7dc6',
    input_names: '_operation,'
  },
  {
    name: 'revokeConfirmation',
    type: 'function',
    signature: 'revokeConfirmation(uint256)',
    encoding: '0x20ea8d86',
    input_names: 'transactionId,'
  },
  {
    name: 'setDailyLimit',
    type: 'function',
    signature: 'setDailyLimit(uint256)',
    encoding: '0xb20d30a9',
    input_names: '_newLimit,'
  },
  {
    name: 'submitTransaction',
    type: 'function',
    signature: 'submitTransaction(address,uint256,bytes)',
    encoding: '0xc6427474',
    input_names: 'destination,value,data,',
    output_names: 'transactionId,'
  },
  {
    name: 'transactionCount',
    type: 'function',
    signature: 'transactionCount()',
    encoding: '0xb77bf600',
    output_names: 'val_0,'
  },
  {
    name: 'transactions',
    type: 'function',
    signature: 'transactions(uint256)',
    encoding: '0x9ace38c2',
    input_names: 'val_0,',
    output_names: 'destination,value,data,executed,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,uint256)',
    encoding: '0x4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Confirmation',
    type: 'event',
    signature: 'Confirmation(address,bytes32)',
    encoding: '0xe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda',
    input_names: 'owner,operation,'
  },
  {
    name: 'ConfirmationNeeded',
    type: 'event',
    signature: 'ConfirmationNeeded(bytes32,address,uint256,address,bytes)',
    encoding: '0x1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32',
    input_names: 'operation,initiator,value,to,data,'
  },
  {
    name: 'Deposit',
    type: 'event',
    signature: 'Deposit(address,uint256)',
    encoding: '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c',
    input_names: 'from,value,'
  },
  {
    name: 'Execution',
    type: 'event',
    signature: 'Execution(uint256)',
    encoding: '0x33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed75',
    input_names: '_transactionId,'
  },
  {
    name: 'ExecutionFailure',
    type: 'event',
    signature: 'ExecutionFailure(uint256)',
    encoding: '0x526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b79236',
    input_names: '_transactionId,'
  },
  {
    name: 'MultiTransact',
    type: 'event',
    signature: 'MultiTransact(address,bytes32,uint256,address,bytes)',
    encoding: '0xe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a',
    input_names: 'owner,operation,value,to,data,'
  },
  {
    name: 'OwnerAdded',
    type: 'event',
    signature: 'OwnerAdded(address)',
    encoding: '0x994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3',
    input_names: 'newOwner,'
  },
  {
    name: 'OwnerAddition',
    type: 'event',
    signature: 'OwnerAddition(address)',
    encoding: '0xf39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d',
    input_names: '_owner,'
  },
  {
    name: 'OwnerChanged',
    type: 'event',
    signature: 'OwnerChanged(address,address)',
    encoding: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
    input_names: 'oldOwner,newOwner,'
  },
  {
    name: 'OwnerRemoval',
    type: 'event',
    signature: 'OwnerRemoval(address)',
    encoding: '0x8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b90',
    input_names: '_owner,'
  },
  {
    name: 'OwnerRemoved',
    type: 'event',
    signature: 'OwnerRemoved(address)',
    encoding: '0x58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da',
    input_names: 'oldOwner,'
  },
  {
    name: 'RequirementChange',
    type: 'event',
    signature: 'RequirementChange(uint256)',
    encoding: '0xa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a',
    input_names: '_required,'
  },
  {
    name: 'RequirementChanged',
    type: 'event',
    signature: 'RequirementChanged(uint256)',
    encoding: '0xacbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da',
    input_names: 'newRequirement,'
  },
  {
    name: 'Revocation',
    type: 'event',
    signature: 'Revocation(address,uint256)',
    encoding: '0xf6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e9',
    input_names: '_sender,_transactionId,'
  },
  {
    name: 'Revoke',
    type: 'event',
    signature: 'Revoke(address,bytes32)',
    encoding: '0xc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b',
    input_names: 'owner,operation,'
  },
  {
    name: 'SingleTransact',
    type: 'event',
    signature: 'SingleTransact(address,uint256,address,bytes)',
    encoding: '0x92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd004',
    input_names: 'owner,value,to,data,'
  },
  {
    name: 'Submission',
    type: 'event',
    signature: 'Submission(uint256)',
    encoding: '0xc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e51',
    input_names: '_transactionId,'
  }
];

//----------------------------------------------------------------------
export const signaturesReducer = (state, action) => {
  let ret = state;
  // TODO(tjayrush): this does not write to the back end
  // localStorage.setItem('signaturesState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useSignatures = () => {
  return useContext(GlobalContext).signatures;
};
