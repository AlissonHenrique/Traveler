import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Addresses from './Addresses';
import Categories from './Categories';
import Depositions from './Depositions';

@Entity('places')
export default class Places {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  category_id: string;

  @ManyToOne(() => Categories, categories => categories.places)
  @JoinColumn({ name: 'category_id' })
  categories: Categories;

  @Column()
  address_id: string;

  @ManyToOne(() => Addresses, addresses => addresses.places)
  @JoinColumn({ name: 'address_id' })
  addresses: Addresses;

  @OneToMany(() => Depositions, depositions => depositions.places)
  @JoinColumn({ name: 'place_id' })
  depositions: Depositions[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
