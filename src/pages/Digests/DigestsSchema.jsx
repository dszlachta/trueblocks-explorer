/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import { getFieldValue } from 'pages/Digests/Digests';

//----------------------------------------------------------------------------
// auto-generate: schema
export const digestsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Cache Type',
    selector: 'type',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Block Range',
    selector: 'blockRange',
    type: 'string',
    hidden: true,
    align: 'center',
    chart: 'both',
    onDisplay: getFieldValue,
  },
  {
    name: 'Block Span',
    selector: 'blockSpan',
    type: 'uint64',
    chart: 'both',
    onDisplay: getFieldValue,
  },
  {
    name: 'Duration',
    selector: 'duration',
    type: 'uint64',
    onDisplay: getFieldValue,
  },
  {
    name: 'Seconds',
    selector: 'seconds',
    type: 'uint64',
    hidden: true,
    chart: 'both',
    onDisplay: getFieldValue,
  },
  {
    name: 'First Block',
    selector: 'firstAppearance',
    type: 'blknum',
    hidden: true,
    chart: 'both',
  },
  {
    name: 'Latest Block',
    selector: 'latestAppearance',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'nAddrs',
    selector: 'nAddresses',
    type: 'uint64',
    chart: 'both',
  },
  {
    name: 'nApps',
    selector: 'nAppearances',
    type: 'uint64',
    cn: 'apps',
    chart: 'both',
  },
  {
    name: 'nAddrs/nBlock',
    selector: 'addrsPerBlock',
    type: 'double',
    decimals: 5,
    chart: 'both',
    onDisplay: getFieldValue,
  },
  {
    name: 'nApps/nBlock',
    selector: 'appsPerBlock',
    type: 'double',
    decimals: 5,
    chart: 'both',
    onDisplay: getFieldValue,
  },
  {
    name: 'nApps/nAddress',
    selector: 'appsPerAddr',
    type: 'double',
    decimals: 5,
    chart: 'both',
    onDisplay: getFieldValue,
  },
  {
    name: 'First TS',
    selector: 'firstTs',
    type: 'timestamp',
    hidden: true,
    chart: 'both',
  },
  {
    name: 'Latest TS',
    selector: 'latestTs',
    type: 'timestamp',
    hidden: true,
  },
  {
    name: 'Filename',
    selector: 'filename',
    type: 'string',
    hidden: true,
    searchable: true,
  },
  {
    name: 'Chunk Size',
    selector: 'indexSizeBytes',
    type: 'filesize',
    chart: 'both',
  },
  {
    name: 'Bloom Size',
    selector: 'bloomSizeBytes',
    type: 'filesize',
    chart: 'both',
  },
  {
    name: 'Chunk Hash',
    selector: 'index_hash',
    type: 'hash',
    align: 'center',
    cn: 'hashes',
    searchable: true,
  },
  {
    name: 'Bloom Hash',
    selector: 'bloom_hash',
    type: 'hash',
    align: 'center',
    cn: 'hashes',
    searchable: true,
  },
];
// auto-generate: schema
  