export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      teams: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          name: string;
          pokemon: Json[] | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name: string;
          pokemon?: Json[] | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string;
          pokemon?: Json[] | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "teams_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      users: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          full_name: string | null;
          id: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          full_name?: string | null;
          id: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          full_name?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
