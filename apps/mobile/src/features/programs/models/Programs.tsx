export interface Program {
  id: string;
  name: string;
  typeId: string;
}

export interface ProgramType {
  id: string;
  name: string;
  isPremium: boolean;
}

export interface GroupedPrograms {
  type: ProgramType;
  programs: Program[];
}
