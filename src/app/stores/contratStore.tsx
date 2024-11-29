import { findAllContrats } from "@/actions/contrats";
import { layoutPropDefs } from "@radix-ui/themes/dist/esm/props/layout.props.js";
import { info } from "console";
import { create } from "zustand";

interface ContratState {
  contrats: any[];

  loadContrats: () => Promise<void>;
  addContrat: (contrat: any) => Promise<boolean>;
  deleteContrat: (id: string) => Promise<boolean>;
  updateContratStatus: (id: string, completed: boolean) => Promise<boolean>;
}

const useContratStore = create<ContratState>(
  (set: (fn: (state: ContratState) => ContratState) => void) => ({
    contrats: [],
    loadContrats: async () => {
      const contrat = await findAllContrats();

      const data = contrat.map((c) => ({
        value: c.name,
        label: c.name,
        color: "#FFC107",
      }));
      set((state) => ({ ...state, contrats: data }));
    },
    addContrat: async (contrat: any) => false,
    deleteContrat: async (id: string) => false,
    updateContratStatus: async (id: string, completed: boolean) => false,
  })
);

export default useContratStore;
