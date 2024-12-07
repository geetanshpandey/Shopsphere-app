'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/main/navbar';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Transaction = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null);

  // Mock transaction data
  const transactions = [
    { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
    { id: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
    { id: 'INV003', status: 'Failed', method: 'Bank Transfer', amount: '$100.00' },
    { id: 'INV004', status: 'Paid', method: 'Debit Card', amount: '$300.00' },
  ];

  const handleEdit = (transactionId: string) => {
    setSelectedTransaction(transactionId);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (transactionId: string) => {
    setSelectedTransaction(transactionId);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Navbar */}
      <Navbar />


      {/* Main Section */}
      <main className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Add Button */}
      <Button
        className="absolute top-12 right-6 z-10 bg-blue-600 text-white hover:bg-blue-700"
      >
        Add Transaction
      </Button>
        <Table className="mt-16">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.method}</TableCell>
                <TableCell className="text-right">{transaction.amount}</TableCell>
                <TableCell className="text-right w-24">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal className="cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='bg-white'>
                      <DropdownMenuItem onClick={() => handleEdit(transaction.id)} className='cursor-pointer'>Edit</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(transaction.id)}  className='cursor-pointer'>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className='bg-white'>
          <DialogHeader>
            <DialogTitle>Edit Transaction</DialogTitle>
          </DialogHeader>
          <Input placeholder="Edit transaction name" />
          <DialogFooter>
            <Button onClick={() => setIsEditDialogOpen(false)} variant={'destructive'}>Cancel</Button>
            <Button type="submit" className='bg-blue-600 text-white hover:bg-blue-700'>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className='bg-white'>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete transaction {selectedTransaction}?</p>
          <DialogFooter>
            <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Transaction;
