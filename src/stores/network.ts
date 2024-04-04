import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ConsensusState } from '@nimiq/core-web'
import { Client, ClientConfiguration } from '@nimiq/core-web'

export const useNetwork = defineStore('network', () => {
  const config = new ClientConfiguration()
  config.network('testalbatross')
  const client = ref<Client>()

  onMounted(async () => {
    client.value = await Client.create(config.build())
    initListeners()
  })

  const head = ref<string>()
  const consensus = ref<ConsensusState>('connecting')

  function initListeners() {
    client.value?.addConsensusChangedListener(newConsensus => consensus.value = newConsensus)
    client.value?.addHeadChangedListener(newHead => head.value = newHead)
  }

  return {
    client,
    consensus,
    head,
  }
})
